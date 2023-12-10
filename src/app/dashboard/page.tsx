import { getServerSession } from 'next-auth';
import { authOptions } from '@/src/app/api/auth/[...nextauth]/authOptions';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'CRM Solutions for Travel Ventures',
};

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  return (
    <h1>
      <p>authenticated dashboard</p>
      {session?.user.image && (
        <Image
          src={session?.user.image}
          width={400}
          height={400}
          alt="placeholder"
        />
      )}
    </h1>
  );
};

export default Dashboard;
