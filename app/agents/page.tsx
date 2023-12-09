'use client';

import { useSession } from 'next-auth/react';

const Agents = () => {
  const session = useSession();
  return <h1>agents</h1>;
};

export default Agents;
