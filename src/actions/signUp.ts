'use server';

import { signupValidation } from '../helpers/validationSchema';
import { createUser } from '../service/signUp';

const signUpAction = async (body: any) => {
  const validation = signupValidation.safeParse(body);

  if (!validation.success) throw new Error('validation failure');

  const response = await createUser(validation.data);
  return response;
};

export default signUpAction;
