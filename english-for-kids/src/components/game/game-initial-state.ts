export interface GameState {
  sounds: string[];
  correctList: string[];
  errorList: string[];
  disabled: boolean;
}

const InitialGameState: GameState = {
  sounds: [],
  correctList: [],
  errorList: [],
  disabled: true,
};

export default InitialGameState;
