import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/api/_base';
import { createTestSchema } from '@/app/validationSchema';

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = createTestSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const test = await prisma.test.create({
    data: { title: body.title, descripton: body.description },
  });

  return NextResponse.json(test, { status: 201 });
}
