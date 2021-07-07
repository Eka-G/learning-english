export interface GameState {
  sounds: string[];
  correct: number;
  error: number;
  disabled: boolean;
}

const InitialGameState: GameState = {
  sounds: [],
  correct: 0,
  error: 0,
  disabled: true,
};

export default InitialGameState;
