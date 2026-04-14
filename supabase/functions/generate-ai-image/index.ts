import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt, style } = await req.json();

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      console.error('LOVABLE_API_KEY not configured');
      return new Response(JSON.stringify({ error: 'AI service not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!prompt) {
      return new Response(JSON.stringify({ error: 'Image prompt is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Generating image with prompt:', prompt.substring(0, 100) + '...');

    // Generate image using Lovable AI Gateway with Gemini image model
    const imageResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash-image-preview',
        messages: [
          {
            role: 'user',
            content: `Generate a photorealistic interior design image: ${prompt}`
          }
        ],
        modalities: ['image', 'text']
      }),
    });

    if (!imageResponse.ok) {
      const errorText = await imageResponse.text();
      console.error('Lovable AI image error:', imageResponse.status, errorText);
      
      if (imageResponse.status === 429) {
        return new Response(JSON.stringify({ error: 'Image generation is busy. Please try again in a moment.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (imageResponse.status === 402) {
        return new Response(JSON.stringify({ error: 'AI usage limit reached. Please try again later.' }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      throw new Error('Image generation failed');
    }

    const imageData = await imageResponse.json();
    console.log('Image response received');

    // Extract image from response
    const imageUrl = imageData.choices?.[0]?.message?.images?.[0]?.image_url?.url;
    const revisedPrompt = imageData.choices?.[0]?.message?.content || prompt;

    if (!imageUrl) {
      console.error('No image URL in response:', JSON.stringify(imageData).substring(0, 500));
      throw new Error('No image generated');
    }

    console.log('Image generated successfully');

    return new Response(JSON.stringify({
      success: true,
      imageUrl,
      revisedPrompt,
      altText: `AI rendered office interior in ${style || 'modern corporate'} style with premium finishes – Hagerstone International`
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Generate AI image error:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Failed to generate image' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
