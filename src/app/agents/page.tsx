import getAgentsAction from '@/src/actions/agents';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agents',
  description: 'CRM Solutions for Travel Ventures',
};

const Agents = async () => {
  const agents = await getAgentsAction();
  console.log(agents);
  return (
    <div>
      <h1>agents</h1>
      {(agents || []).map((el) => {
        return <p key={Math.random()}>{JSON.stringify(el)}</p>;
      })}
    </div>
  );
};

export default Agents;
