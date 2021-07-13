import type { Reducer } from 'react';
import type { State } from './initial-state';

export interface Action {
  type: string;
}

const reducer: Reducer<State, Action> = (state: State, action: Action) => {
  switch (action.type) {
    case 'toggle mode':
      return { ...state, gameMode: state.gameMode === 'train' ? 'game' : 'train' };
    case 'start game':
      return { ...state, isGame: true };
    case 'finish game':
      return { ...state, isGame: false };
    case 'login':
      return { ...state, isLogin: true };
    case 'logout':
      return { ...state, isLogin: false };
    default:
      throw new Error();
  }
};

export default reducer;
