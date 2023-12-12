import { z } from 'zod';

export const signupValidation = z.object({
  name: z.string().trim().min(2, 'Name too short').max(20, 'Name too long'),
  email: z.string().trim().email().toLowerCase(),
  password: z.string().min(5, 'Password should be longer than 5 charachters'),
});

export const signinValidationSchema = z.object({
  email: z.string().trim().email().toLowerCase(),
  password: z.string().min(5),
});

export const organisationValidationSchema = z.object({
  name: z.string().min(2).max(30),
});

export const citiesValidationSchema = z.object({
  country: z.string().trim().min(2).max(20).toLowerCase(),
  iso3: z.string().trim().min(3).max(3).toUpperCase(),
});
