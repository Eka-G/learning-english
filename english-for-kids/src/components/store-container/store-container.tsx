import { useReducer, ReactChild } from 'react';
import { GameContext } from '../../shared';
import reducer from './reducer';
import InitialState from './initial-state';

interface StoreContainerProps {
  children: ReactChild | ReactChild[];
}

const StoreContainer = ({ children }: StoreContainerProps) => {
  const [state, dispatch] = useReducer(reducer, InitialState);

  return <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>;
};

export default StoreContainer;
