import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { Button, Input } from '@/components';

const Server = async () => {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div>
        <h1>Server View</h1>
        <p>{JSON.stringify(session)}</p>
        <Button></Button>
        <Input></Input>
      </div>
    </>
  );
};

export default Server;
