import { getAllAgents } from '@/service/agents';

const Agents = async () => {
  const agents = await getAllAgents();
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
