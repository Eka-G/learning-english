import type { Reducer } from 'react';
import type { GameState } from './game-initial-state';

export interface Action {
  type: string;
}

const gameReducer: Reducer<GameState, Action> = (state: GameState, action: Action) => {
  switch (action.type) {
    case 'next sound':
      return { ...state, sounds: state.sounds.slice(0, -1), disabled: true };
    case 'on disabled':
      return { ...state, disabled: true };
    case 'off disabled':
      return { ...state, disabled: false };
    default:
      throw new Error();
  }
};

export default gameReducer;