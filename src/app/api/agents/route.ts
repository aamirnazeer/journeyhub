import { NextRequest, NextResponse } from 'next/server';
import { getAllAgents } from '@/src/service/agents';

export async function GET(request: NextRequest) {
  try {
    const agents = await getAllAgents();
    return NextResponse.json(agents, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 400 });
  }
}
