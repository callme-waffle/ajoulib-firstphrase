import { NextResponse } from 'next/server';
import { getSentence } from '@/api/request';

export async function GET() {
  try {
    const sentences = await getSentence();
    return NextResponse.json(sentences);
  } catch (error) {
    console.error('Error in sentence API:', error);
    return NextResponse.json(
      { result: false,error: '문장을 불러오는데 실패했습니다.' },
      { status: 500 }
    );
  }
} 