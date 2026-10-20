import { createContext } from 'react';

export const DemoContext = createContext({
  onFlowChange: (flowName) => {},
  currentFlowName: 'Dashboard',
});
