import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// In-memory OTP storage (should match send-otp)
const otpStore = new Map<string, { otp: string; expiresAt: number; attempts: number }>();

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { phone, otp, name, email, company, quizAnswers, areaSqft, pkg, features } = await req.json();
    
    if (!phone || !otp) {
      return new Response(JSON.stringify({ error: 'Phone and OTP are required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Normalize phone number
    const cleanPhone = phone.replace(/\D/g, '');
    const normalizedPhone = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;

    // For development: accept "123456" as valid OTP
    const isDevOtp = otp === '123456';
    
    const storedData = otpStore.get(normalizedPhone);
    
    if (!isDevOtp) {
      if (!storedData) {
        return new Response(JSON.stringify({ error: 'OTP expired or not found. Please request a new OTP.' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      if (Date.now() > storedData.expiresAt) {
        otpStore.delete(normalizedPhone);
        return new Response(JSON.stringify({ error: 'OTP has expired. Please request a new OTP.' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      if (storedData.attempts >= 3) {
        otpStore.delete(normalizedPhone);
        return new Response(JSON.stringify({ error: 'Too many attempts. Please request a new OTP.' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      if (storedData.otp !== otp) {
        storedData.attempts++;
        return new Response(JSON.stringify({ 
          error: 'Invalid OTP. Please try again.',
          attemptsLeft: 3 - storedData.attempts
        }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    }

    // OTP verified - clean up
    otpStore.delete(normalizedPhone);

    // Store lead in Supabase
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: insertError } = await supabase.from('leads').insert({
      name: name || 'Anonymous',
      email: email || '',
      number: normalizedPhone,
    });

    if (insertError) {
      console.error('Lead insert error:', insertError);
    } else {
      console.log('Lead stored successfully:', { name, email, phone: normalizedPhone });
    }

    // Send confirmation WhatsApp
    const maytapiKey = Deno.env.get('MAYTAPI_API_KEY');
    if (maytapiKey && name) {
      try {
        await fetch(
          'https://api.maytapi.com/api/e8ee2e1b-5dd6-4a7d-b90e-7dfeda84f1da/42869/sendMessage',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-maytapi-key': maytapiKey,
            },
            body: JSON.stringify({
              to_number: normalizedPhone,
              type: 'text',
              message: `✨ Welcome to Hagerstone, ${name}!\n\nThank you for completing our Style Quiz. Our design team will reach out shortly to discuss your office transformation.\n\n📞 Need immediate assistance? Call us!\n\n- Hagerstone International\nIndia's First AI-Driven Interior Design Company`,
            }),
          }
        );
      } catch (e) {
        console.error('Confirmation message error:', e);
      }
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Phone verified successfully',
      verified: true
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Verify OTP error:', error);
    return new Response(JSON.stringify({ error: 'Verification failed' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
