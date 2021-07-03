import React from 'react';
import InitialState, { State } from '../components/store-container/initial-state';
import { Action } from '../components/store-container/reducer';

interface GameContextValue {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const GameContext = React.createContext<GameContextValue>({ state: InitialState, dispatch: () => {} });

export default GameContext;
