import type { Reducer } from 'react';
import type { State } from './initial-state';

export interface Action {
  type: string;
}

const reducer: Reducer<State, Action> = (state: State, action: Action) => {
  switch (action.type) {
    case 'toggle mode':
      return { ...state, mode: state.mode === 'train' ? 'game' : 'train' };
    case 'start game':
      return { ...state, isGame: true };
    case 'finish game':
      return { ...state, isGame: false };
    default:
      throw new Error();
  }
};

export default reducer;
