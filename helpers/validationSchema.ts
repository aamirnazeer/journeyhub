import { z } from 'zod';

export const signupValidation = z.object({
  name: z.string().min(2, 'Name too short').max(20, 'Name too long').trim(),
  email: z.string().email().trim().toLowerCase(),
  password: z.string().min(5, 'Password should be longer than 5 charachters'),
});

export const signinValidationSchema = z.object({
  email: z.string().email().trim().toLowerCase(),
  password: z.string().min(5),
});

export const organisationSchema = z.object({
  name: z.string().min(2).max(30),
});
