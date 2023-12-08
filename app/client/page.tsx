'use client';

import { useSession } from 'next-auth/react';

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
        <button onClick={getHandler}>get</button>
      </div>
    </>
  );
};

export default Client;
