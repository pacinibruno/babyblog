import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const { data } = await supabase
      .from('test')
      .select('*')
      .limit(1)

    return NextResponse.json({ data })
  } catch (_) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
} 