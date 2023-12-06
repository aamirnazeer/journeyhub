'use client';

import { useSession } from 'next-auth/react';

const Client = () => {
  const { data } = useSession();
  return (
    <>
      <div>
        <h1>client</h1>
        <p>{JSON.stringify(data)}</p>
      </div>
    </>
  );
};

export default Client;
