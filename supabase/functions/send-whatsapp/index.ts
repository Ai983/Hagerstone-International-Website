import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const MAYTAPI_URL = "https://api.maytapi.com/api/b8cce1b9-0f9f-4aef-994c-d232716471f0/46821/sendMessage";

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to_number, message } = await req.json();

    // Clean the phone number: remove spaces, hyphens, parentheses, and plus signs
    const cleanedNumber = to_number.replace(/[\s\-\(\)\+]/g, '');

    console.log("Sending WhatsApp message to:", cleanedNumber);

    const maytapiApiKey = Deno.env.get('MAYTAPI_API_KEY');
    
    if (!maytapiApiKey) {
      console.error("MAYTAPI_API_KEY not found in environment");
      return new Response(
        JSON.stringify({ error: "MAYTAPI_API_KEY not configured" }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const maytapiPayload = {
      to_number: cleanedNumber,
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
    console.log("Maytapi response data:", responseData);

    if (!maytapiResponse.ok) {
      console.error("Maytapi API error:", maytapiResponse.status, responseData);
      return new Response(
        JSON.stringify({ 
          error: "Failed to send WhatsApp message",
          details: responseData 
        }),
        {
          status: maytapiResponse.status,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        data: responseData 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error("Error in send-whatsapp function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "Unknown error occurred" 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
