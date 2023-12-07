'use client';

import { signIn } from 'next-auth/react';
import { useRef } from 'react';

const SignIn = () => {
  const email = useRef('');
  const password = useRef('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await signIn('credentials', {
      email: email.current,
      password: password.current,
      redirect: true,
      callbackUrl: '/',
    });
  };

  return (
    <form>
      <label>
        Email
        <input
          name="email"
          type="email"
          onChange={(e) => (email.current = e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          name="password"
          type="password"
          onChange={(e) => (password.current = e.target.value)}
        />
      </label>
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Signin
      </button>
    </form>
  );
};

export default SignIn;
