import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/src/app/api/auth/[...nextauth]/authOptions';
import prisma from '@/prisma/_base';
import { organisationSchema } from '@/src/helpers/validationSchema';

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  try {
    const organisations = await prisma.organisation.findMany();
    return NextResponse.json(organisations, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const body = await request.json();
  try {
    const validation = organisationSchema.safeParse(body);
    if (!validation.success)
      return NextResponse.json(validation.error.format(), { status: 400 });
    const organisation = await prisma.organisation.create({
      data: {
        name: validation.data.name,
      },
    });
    return NextResponse.json(organisation, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 400 });
  }
}
