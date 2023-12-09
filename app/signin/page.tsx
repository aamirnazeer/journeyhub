'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signinValidationSchema } from '../../helpers/validationSchema';
import { z } from 'zod';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Button, Input } from '@/components';
import { useState } from 'react';

type SignInForm = z.infer<typeof signinValidationSchema>;

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const onSubmit: SubmitHandler<SignInForm> = async (data) => {
    setLoading(() => true);
    await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    }).then((res) => {
      setLoading(() => false);
      if (res?.error) {
        resetField('password');
        console.error(res.error);
      } else {
        return null;
      }
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<SignInForm>({ resolver: zodResolver(signinValidationSchema) });
  const { status } = useSession();
  if (status === 'authenticated') redirect('/');
  if (status === 'loading') return <p></p>;
  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 m-auto flex flex-col max-w-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        placeholder="Enter your email"
        label="Email"
        type="email"
        error={!!errors.email}
        errorMessage={errors.email?.message}
        hookForm={register('email', { required: true })}
      />
      <Input
        label="Password"
        type="password"
        error={!!errors.password}
        errorMessage={errors.password?.message}
        hookForm={register('password', { required: true })}
      />
      <Button type="submit" label="SignIn" disabled={loading} />
    </form>
  );
};

export default SignIn;
