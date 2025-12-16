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
    const { quizAnswers, styleName, areaSqft, pkg } = await req.json();

    if (!openAIApiKey) {
      return new Response(JSON.stringify({ error: 'OpenAI API key not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Build context from quiz answers
    const answersContext = quizAnswers 
      ? Object.entries(quizAnswers).map(([key, value]) => `${key}: ${value}`).join(', ')
      : styleName || 'Modern Corporate';

    // Generate style description using GPT
    const textResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are an expert interior designer for Hagerstone International, India's first AI-driven interior design and construction company. 
            
You create detailed, SEO-rich descriptions for office interior styles. Include keywords like:
- office interior design
- corporate workspace design
- turnkey office fit-out
- modern office interiors Delhi NCR
- commercial interior design
- workspace layout planning
- MEP services
- construction automation

Write in a professional yet engaging tone. Focus on materials, layouts, lighting, colors, and how the space enhances productivity and brand identity.`
          },
          {
            role: 'user',
            content: `Create a comprehensive style description (500+ words) for an office interior with these preferences:
            
Style preferences: ${answersContext}
Office size: ${areaSqft || '2000'} sq.ft
Budget tier: ${pkg || 'mid-level'}

Include:
1. A creative style title
2. Key design elements and materials
3. Color palette recommendations
4. Lighting strategy
5. Layout suggestions for different zones (workstations, meeting rooms, reception)
6. Furniture recommendations
7. How this style enhances productivity and brand image
8. Timeline estimate
9. Material quality recommendations

Make it specific, actionable, and inspiring for business owners looking to transform their workspace.`
          }
        ],
        max_tokens: 1500,
        temperature: 0.8,
      }),
    });

    const textData = await textResponse.json();
    
    if (!textResponse.ok) {
      console.error('OpenAI text error:', textData);
      throw new Error(textData.error?.message || 'Failed to generate description');
    }

    const styleDescription = textData.choices[0]?.message?.content || '';

    // Generate image prompt
    const imagePromptResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You create detailed image generation prompts for DALL-E 3 to create photorealistic interior design renderings. Focus on specific materials, lighting, colors, furniture, and architectural details.'
          },
          {
            role: 'user',
            content: `Create a detailed DALL-E 3 prompt for a modern corporate interior rendering based on:
            
Style: ${answersContext}
Budget: ${pkg || 'mid-level'}

The prompt should create a photorealistic interior visualization with:
- Specific materials and finishes
- Natural lighting through large windows
- Contemporary furniture
- Indian corporate design influence
- Professional photography quality
- Wide-angle perspective

Return ONLY the prompt, nothing else.`
          }
        ],
        max_tokens: 300,
      }),
    });

    const imagePromptData = await imagePromptResponse.json();
    const imagePrompt = imagePromptData.choices[0]?.message?.content || 
      `Photorealistic modern corporate office interior, clean minimalist design, glass partitions, warm wood accents, ergonomic workstations, natural light streaming through floor-to-ceiling windows, collaborative workspace area, premium materials, Indian corporate style, architectural photography, 8k resolution`;

    // Extract title from description (first line or generate one)
    const titleMatch = styleDescription.match(/^#?\s*(.+?)(?:\n|$)/);
    const styleTitle = titleMatch ? titleMatch[1].replace(/[#*]/g, '').trim() : 'Modern Corporate Excellence';

    return new Response(JSON.stringify({
      success: true,
      styleTitle,
      styleDescription,
      imagePrompt,
      recommendations: {
        timeline: areaSqft && parseInt(areaSqft) > 5000 ? '12-16 weeks' : '8-12 weeks',
        materials: pkg === 'luxury' ? 'Premium imported materials' : pkg === 'basic' ? 'Quality local materials' : 'Balanced premium materials',
      }
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Generate AI style error:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Failed to generate style' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
