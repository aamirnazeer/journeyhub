'use client';

import { useSession } from 'next-auth/react';
import { Button, Input } from '@/components';

const Client = () => {
  const getHandler = async () => [
    await fetch('/api/test', {
      method: 'GET',
      credentials: 'include',
    }),
  ];
  const data = useSession();
  return (
    <>
      <div>
        <h1>Client</h1>
        <p>{JSON.stringify(data)}</p>
        <Button></Button>
        <Input></Input>
        <button onClick={getHandler}>get</button>
      </div>
    </>
  );
};

export default Client;
