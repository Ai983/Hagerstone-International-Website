import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const MAYTAPI_URL = "https://api.maytapi.com/api/b8cce1b9-0f9f-4aef-994c-d232716471f0/46821/sendMessage";

// Rate limiting
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(identifier, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (isRateLimited(clientIP)) {
      return new Response(
        JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { to_number, message } = await req.json();

    // Validate required fields
    if (!to_number || !message) {
      return new Response(
        JSON.stringify({ error: 'Phone number and message are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate message
    if (typeof message !== 'string' || message.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Invalid message format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (message.length > 1000) {
      return new Response(
        JSON.stringify({ error: 'Message too long (max 1000 characters)' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Normalise and validate the phone number
    const rawNumber = String(to_number);
    const cleanedNumber = rawNumber.replace(/[\s\-\(\)\+]/g, '');

    if (!/^\d+$/.test(cleanedNumber)) {
      return new Response(
        JSON.stringify({ error: 'Invalid phone number format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (cleanedNumber.length < 10 || cleanedNumber.length > 15) {
      return new Response(
        JSON.stringify({ error: 'Phone number must be 10-15 digits' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const finalNumber = /^\d{10}$/.test(cleanedNumber)
      ? `91${cleanedNumber}`
      : cleanedNumber;

    console.log("Sending WhatsApp message to:", finalNumber);

    const maytapiApiKey = Deno.env.get('MAYTAPI_API_KEY');
    
    if (!maytapiApiKey) {
      console.error("MAYTAPI_API_KEY not found in environment");
      return new Response(
        JSON.stringify({ error: "Service configuration error" }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const maytapiPayload = {
      to_number: finalNumber,
      type: "text",
      message: message
    };

    const maytapiResponse = await fetch(MAYTAPI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-maytapi-key": maytapiApiKey
      },
      body: JSON.stringify(maytapiPayload),
    });

    const responseData = await maytapiResponse.json();
    
    console.log("Maytapi response status:", maytapiResponse.status);

    if (!maytapiResponse.ok) {
      console.error("Maytapi API error:", maytapiResponse.status);
      return new Response(
        JSON.stringify({ error: "Failed to send WhatsApp message" }),
        { status: maytapiResponse.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, data: responseData }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error("Error in send-whatsapp function:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send message" }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
