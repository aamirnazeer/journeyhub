import prisma from '@/prisma/_base';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

export const getAllAgents = async () => {
  const session = await getServerSession(authOptions);
  const orgId = session?.user.organisationId;
  if (typeof orgId !== 'string') return null;
  const agents = await prisma.agents.findMany({
    where: {
      organisationId: orgId,
    },
    include: {
      City: {
        include: {
          State: {
            include: {
              Country: true,
            },
          },
        },
      },
    },
  });
  return agents;
};
