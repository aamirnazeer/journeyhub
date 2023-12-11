import prisma from '@/prisma/_base';
import bcrypt from 'bcrypt';

export const createUser = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await prisma.users.create({
    data: {
      name: name,
      email: email,
      password: bcrypt.hashSync(password, 10),
    },
  });
  return response;
};
