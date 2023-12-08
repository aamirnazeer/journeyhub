'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signinValidationSchema } from '../helpers/validationSchema';
import { z } from 'zod';
import classNames from 'classnames';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

type SignInForm = z.infer<typeof signinValidationSchema>;

const SignIn = () => {
  const onSubmit: SubmitHandler<SignInForm> = async (data, e) => {
    await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: '/',
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({ resolver: zodResolver(signinValidationSchema) });
  const { status } = useSession();
  if (status === 'authenticated') redirect('/');
  if (status === 'loading') return <p></p>;

  return (
    <form
      className="flex flex-col max-w-md m-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="p-1">
        Email:
        <input
          type="email"
          className={classNames({
            'border w-full': true,
          })}
          {...register('email', { required: true })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </label>
      <label className="p-1">
        Password:
        <input
          type="password"
          className={classNames({ 'border w-full': true })}
          {...register('password', { required: true })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </label>
      <button
        type="submit"
        className="border p-1 mt-1 w-fit justify-self-center m-auto bg-sky-500 rounded-md"
      >
        Signin
      </button>
    </form>
  );
};

export default SignIn;
