import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

const Server = async () => {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div>
        <h1>Server View</h1>
        <p>{JSON.stringify(session)}</p>
      </div>
    </>
  );
};

export default Server;
