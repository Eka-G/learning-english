export interface State {
  mode: 'train' | 'game';
  isGame: boolean;
}

const InitialState: State = {
  mode: 'train',
  isGame: false,
};

export default InitialState;
