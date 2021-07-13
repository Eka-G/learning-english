export interface State {
  isLogin: boolean;
  gameMode: 'train' | 'game';
  isGame: boolean;
}

const InitialState: State = {
  isLogin: false,
  gameMode: 'train',
  isGame: false,
};

export default InitialState;
