import React from 'react';
import InitialState, { State } from '../components/store-container/initial-state';
import { Action } from '../components/store-container/reducer';

interface AppContextValue {
  state: State;
  dispatch: React.Dispatch<Action>;
  currentCategory: string | null;
}

const AppContext = React.createContext<AppContextValue>({
  state: InitialState,
  dispatch: () => {},
  currentCategory: null,
});

export default AppContext;
