import { Metadata } from 'next';
import CitiesAdmin from './CitiesAdmin';
import { getCitiesAction } from '@/src/actions/cities';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'CRM Solutions for Travel Ventures',
};

const Admin = async () => {
  const cities = await getCitiesAction();

  return <CitiesAdmin cities={cities} />;
};

export default Admin;
