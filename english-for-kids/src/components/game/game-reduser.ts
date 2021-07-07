import type { Reducer } from 'react';
import type { GameState, InitialGameState } from './game-initial-state';

export interface Action {
  type: string;
}

const gameReducer: Reducer<GameState, Action> = (state: GameState, action: Action) => {
  switch (action.type) {
    case 'next sound':
      return { ...state, sounds: state.sounds.slice(0, -1), correct: state.correct + 1, disabled: true };
    case 'invalid card':
      return { ...state, error: state.error + 1 };
    case 'on disabled':
      return { ...state, disabled: true };
    case 'off disabled':
      return { ...state, disabled: false };
    case 'reset state':
      return { ...state, InitialGameState };
    default:
      throw new Error();
  }
};

export default gameReducer;
