import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { phone, otp, name, email, company } = await req.json();
    
    if (!phone || !otp) {
      return new Response(JSON.stringify({ error: 'Phone and OTP are required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Normalize phone number
    const cleanPhone = phone.replace(/\D/g, '');
    const normalizedPhone = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // For development: accept "123456" as valid OTP
    const isDevOtp = otp === '123456';
    
    if (!isDevOtp) {
      // Fetch stored OTP from database
      const { data: storedData, error: fetchError } = await supabase
        .from('otp_codes')
        .select('*')
        .eq('phone', normalizedPhone)
        .maybeSingle();

      if (fetchError) {
        console.error('OTP fetch error:', fetchError);
        throw new Error('Verification failed');
      }

      if (!storedData) {
        return new Response(JSON.stringify({ error: 'OTP expired or not found. Please request a new OTP.' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      if (new Date() > new Date(storedData.expires_at)) {
        // Clean up expired OTP
        await supabase.from('otp_codes').delete().eq('phone', normalizedPhone);
        return new Response(JSON.stringify({ error: 'OTP has expired. Please request a new OTP.' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      if (storedData.attempts >= 3) {
        await supabase.from('otp_codes').delete().eq('phone', normalizedPhone);
        return new Response(JSON.stringify({ error: 'Too many attempts. Please request a new OTP.' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      if (storedData.otp_hash !== otp) {
        // Increment attempts
        await supabase
          .from('otp_codes')
          .update({ attempts: storedData.attempts + 1 })
          .eq('phone', normalizedPhone);
        
        return new Response(JSON.stringify({ 
          error: 'Invalid OTP. Please try again.',
          attemptsLeft: 3 - (storedData.attempts + 1)
        }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    }

    // OTP verified - clean up
    await supabase.from('otp_codes').delete().eq('phone', normalizedPhone);

    // Store lead in Supabase
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
