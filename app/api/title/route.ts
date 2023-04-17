import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json({
    groom: '서현우',
    bride: '고아람',
  });
}
