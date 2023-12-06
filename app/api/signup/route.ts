import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/_base';
import { signupValidation } from '@/app/validationSchema';

export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    const validation = signupValidation.safeParse(body);

    if (!validation.success)
      return NextResponse.json(validation.error.format(), { status: 400 });

    await prisma.users.create({
      data: { name: body.name, email: body.email, password: body.password },
    });

    return NextResponse.json(
      { message: 'User Creation Success' },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 400 });
  }
}
