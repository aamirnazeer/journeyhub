'use server';

import { getAllAgents } from '../service/agents';

const getAgentsAction = async () => {
  const response = await getAllAgents();
  return response;
};

export default getAgentsAction;
