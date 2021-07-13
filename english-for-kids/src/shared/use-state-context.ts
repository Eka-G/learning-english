import { useContext } from 'react';
import AppContext from './app-context';

const useStateContext = () => {
  return useContext(AppContext);
};

export default useStateContext;
