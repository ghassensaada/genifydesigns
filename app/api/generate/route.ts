import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { prompt, style = 'artistic' } = await request.json()

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      )
    }

    // For demo purposes, we'll simulate the API call
    // In production, replace this with actual FAL.AI API call
    
    // Example FAL.AI API call:
    /*
    const response = await fetch('https://fal.run/fal-ai/fast-sdxl', {
      method: 'POST',
      headers: {
        'Authorization': `Key ${process.env.FAL_AI_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: prompt,
        image_size: '1024x1024',
        num_inference_steps: 25,
        guidance_scale: 7.5,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to generate image')
    }

    const data = await response.json()
    const imageUrl = data.images[0].url
    */

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Return a placeholder image for demo
    const demoImageUrl = `https://via.placeholder.com/1024x1024/667eea/ffffff?text=${encodeURIComponent(prompt)}`

    return NextResponse.json({
      success: true,
      imageUrl: demoImageUrl,
      prompt: prompt,
      generatedAt: new Date().toISOString(),
    })

  } catch (error) {
    console.error('Image generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate image' },
      { status: 500 }
    )
  }
} 