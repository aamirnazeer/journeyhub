'use client';

import { useRef } from 'react';
import { signIn } from 'next-auth/react';

const SignUp = () => {
  const name = useRef('');
  const email = useRef('');
  const password = useRef('');

  const handleSignup = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.current,
          email: email.current,
          password: password.current,
        }),
      });
      if (response.ok) {
        await signIn('credentials', {
          email: email.current,
          password: password.current,
          redirect: true,
          callbackUrl: '/',
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form>
      <label>
        Name
        <input
          name="name"
          type="text"
          onChange={(e) => (name.current = e.target.value)}
        />
      </label>
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
      <button type="submit" onClick={(e) => handleSignup(e)}>
        SignUp
      </button>
    </form>
  );
};

export default SignUp;
