'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signinValidationSchema } from '../helpers/validationSchema';
import { z } from 'zod';

type SignInForm = z.infer<typeof signinValidationSchema>;
const SignIn = () => {
  // const email = useRef('');
  // const password = useRef('');

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   await signIn('credentials', {
  //     email: email.current,
  //     password: password.current,
  //     redirect: true,
  //     callbackUrl: '/',
  //   });
  // };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignInForm>({ resolver: zodResolver(signinValidationSchema) });
  const onSubmit: SubmitHandler<SignInForm> = (data) => console.log(data);

  console.log(watch('email')); // watch input value by passing the name of it

  return (
    <form
      className="flex flex-col max-w-md m-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="p-1">
        Email:
        <input
          type="email"
          className="border w-full"
          {...register('email', { required: true })}
        />
        {errors.email && <span>This field is required</span>}
      </label>
      <label className="p-1">
        Password:
        <input
          type="password"
          className="border w-full"
          {...register('password', { required: true })}
        />
        {errors.email && <span>This field is required</span>}
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
