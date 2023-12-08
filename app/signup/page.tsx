'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupValidation } from '../helpers/validationSchema';
import { z } from 'zod';
import classNames from 'classnames';
import { signIn } from 'next-auth/react';

type SignUpForm = z.infer<typeof signupValidation>;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({ resolver: zodResolver(signupValidation) });

  const onSubmit = async (data: SignUpForm) => {
    try {
      const response = await fetch('/api/signup', {
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
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className="flex flex-col max-w-md m-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>
        Name
        <input
          type="text"
          className={classNames({
            'border w-full': true,
          })}
          {...register('name', { required: true })}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </label>
      <label>
        Email
        <input
          type="email"
          className={classNames({
            'border w-full': true,
          })}
          {...register('email', { required: true })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </label>
      <label>
        Password
        <input
          type="password"
          className={classNames({
            'border w-full': true,
          })}
          {...register('password', { required: true })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </label>
      <button
        type="submit"
        className="border p-1 mt-1 w-fit justify-self-center m-auto bg-sky-500 rounded-md"
      >
        SignUp
      </button>
    </form>
  );
};

export default SignUp;
