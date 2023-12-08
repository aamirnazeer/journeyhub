import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/utils/authOptions';

const Home = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1>Un-authenticated landing page!</h1>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
};

export default Home;
