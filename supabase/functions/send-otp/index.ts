import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// In-memory OTP storage (for production, use Redis or database)
const otpStore = new Map<string, { otp: string; expiresAt: number; attempts: number }>();

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
    const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes expiry

    // Store OTP
    otpStore.set(normalizedPhone, { otp, expiresAt, attempts: 0 });

    // Send OTP via WhatsApp using Maytapi
    const maytapiKey = Deno.env.get('MAYTAPI_API_KEY');
    
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
        console.log('WhatsApp OTP sent:', whatsappData);
      } catch (whatsappError) {
        console.error('WhatsApp send error:', whatsappError);
        // Continue even if WhatsApp fails - for development
      }
    }

    console.log(`OTP for ${normalizedPhone}: ${otp}`); // For development debugging

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'OTP sent successfully',
      phone: normalizedPhone.slice(-4) // Return last 4 digits for UI
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

// Export for verify function to access
export { otpStore };
