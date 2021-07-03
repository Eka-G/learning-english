import { useContext } from 'react';
import GameContext from './game-context';

const useStateContext = () => {
  return useContext(GameContext);
};

export default useStateContext;
