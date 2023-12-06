import { z } from 'zod';

export const signupValidation = z.object({
  name: z.string().min(2, 'Name too short').max(20, 'Name too long'),
  email: z.string().email(),
  password: z.string().min(5, 'Password should be longer than 5 charachters'),
});
