'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupValidation } from '@/src/helpers/validationSchema';
import { z } from 'zod';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Button, Input } from '@/src/components';
import { useState } from 'react';

type SignUpForm = z.infer<typeof signupValidation>;

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({ resolver: zodResolver(signupValidation) });
  const { status } = useSession();
  if (status === 'authenticated') redirect('/');
  if (status === 'loading') return <p></p>;

  const onSubmit = async (data: SignUpForm) => {
    setLoading(() => true);
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        await signIn('credentials', {
          email: data.email,
          password: data.password,
          redirect: true,
          callbackUrl: '/',
        });
      } else {
        console.log(response);
        setLoading(() => false);
      }
    } catch (err) {
      setLoading(() => false);
      console.log(err);
    }
  };

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 m-auto flex flex-col max-w-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Name"
        placeholder="Enter your name"
        error={!!errors.name}
        errorMessage={errors.name?.message}
        hookForm={register('name', { required: true })}
      />
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email address"
        error={!!errors.email}
        errorMessage={errors.email?.message}
        hookForm={register('email', { required: true })}
      />
      <Input
        type="password"
        label="Password"
        error={!!errors.password}
        errorMessage={errors.password?.message}
        hookForm={register('password', { required: true })}
      />
      <Button label="SignUp" disabled={loading} />
    </form>
  );
};

export default SignUp;
