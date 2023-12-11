'use server';

import { z } from 'zod';
import { citiesValidationSchema } from '../helpers/validationSchema';
import prisma from '@/prisma/_base';
import { revalidatePath } from 'next/cache';

type CitiesForm = z.infer<typeof citiesValidationSchema>;

export const citiesAddAction = async (data: CitiesForm) => {
  const response = await prisma.country.create({
    data: {
      name: data.country,
    },
  });
  revalidatePath('/admin');
  return response;
};

export const getCitiesAction = async () => {
  const response = await prisma.country.findMany();
  return response;
};
