import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  return NextResponse.json({
    falAiKey: !!process.env.FAL_AI_KEY,
    falAiKeyLength: process.env.FAL_AI_KEY?.length || 0,
    stripeKey: !!process.env.STRIPE_SECRET_KEY,
    firebaseKey: !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    printifyKey: !!process.env.PRINTIFY_API_KEY,
    nodeEnv: process.env.NODE_ENV,
  })
} 