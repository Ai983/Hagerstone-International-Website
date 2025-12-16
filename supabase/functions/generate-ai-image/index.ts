import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt, style } = await req.json();

    if (!openAIApiKey) {
      return new Response(JSON.stringify({ error: 'OpenAI API key not configured' }), {
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

    // Generate image using DALL-E 3
    const imageResponse = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'dall-e-3',
        prompt: prompt,
        n: 1,
        size: '1792x1024',
        quality: 'hd',
        style: 'natural',
      }),
    });

    const imageData = await imageResponse.json();

    if (!imageResponse.ok) {
      console.error('DALL-E error:', imageData);
      throw new Error(imageData.error?.message || 'Image generation failed');
    }

    const imageUrl = imageData.data?.[0]?.url;
    const revisedPrompt = imageData.data?.[0]?.revised_prompt;

    if (!imageUrl) {
      throw new Error('No image URL returned');
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
