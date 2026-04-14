import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const hashOTP = async (otp: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(otp);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { phone } = await req.json();
    
    if (!phone) {
      return new Response(JSON.stringify({ error: 'Phone number is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Validate Indian phone number format
    const cleanPhone = phone.replace(/\D/g, '');
    const isValidIndian = /^[6-9]\d{9}$/.test(cleanPhone) || /^91[6-9]\d{9}$/.test(cleanPhone);
    
    if (!isValidIndian) {
      return new Response(JSON.stringify({ error: 'Please enter a valid Indian phone number' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Normalize phone number
    const normalizedPhone = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpHash = await hashOTP(otp);
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000).toISOString(); // 5 minutes expiry

    // Store OTP hash in database (using service role)
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Upsert OTP (replace if exists)
    const { error: upsertError } = await supabase
      .from('otp_codes')
      .upsert({
        phone: normalizedPhone,
        otp_hash: otpHash,
        expires_at: expiresAt,
        attempts: 0
      }, { onConflict: 'phone' });

    if (upsertError) {
      console.error('OTP storage error:', upsertError);
      throw new Error('Failed to generate OTP');
    }

    // Send OTP via WhatsApp using Maytapi
    const maytapiKey = Deno.env.get('MAYTAPI_API_KEY');
    let whatsappSent = false;
    
    if (maytapiKey) {
      try {
        const whatsappResponse = await fetch(
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
              message: `🏢 Hagerstone Style Quiz\n\nYour OTP is: ${otp}\n\nValid for 5 minutes. Do not share this code with anyone.\n\n- Hagerstone International`,
            }),
          }
        );
        
        const whatsappData = await whatsappResponse.json();
        whatsappSent = whatsappData.success === true;
      } catch (whatsappError) {
        console.error('WhatsApp send error:', whatsappError);
      }
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: whatsappSent 
        ? 'OTP sent to your WhatsApp' 
        : 'OTP generated (WhatsApp unavailable - please contact support)',
      phone: normalizedPhone.slice(-4),
      whatsappSent
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Send OTP error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send OTP' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
