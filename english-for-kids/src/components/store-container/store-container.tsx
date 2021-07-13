import { useReducer, ReactChild } from 'react';
import { AppContext } from '../../shared';
import reducer from './reducer';
import InitialState from './initial-state';

interface StoreContainerProps {
  children: ReactChild | ReactChild[];
}

const StoreContainer = ({ children }: StoreContainerProps) => {
  const [state, dispatch] = useReducer(reducer, InitialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export default StoreContainer;
