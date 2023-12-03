import { z } from 'zod';

export const createTestSchema = z.object({
  title: z
    .string()
    .min(4, 'title should be more thatn 4 char long')
    .max(20, 'title cannot be more than 20 char long'),
  description: z.string().min(10).max(255),
});
