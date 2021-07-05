import { useState } from 'react';
import { useSound } from 'use-sound';
import { CardInformation } from '../../constants';
import { useStateContext } from '../../shared';
import CardsField from '../cards-field/cards-field';
import Card from '../card';
import RatingScale from '../rating-scale';

interface GameProps {
  cards: CardInformation[];
}
interface GameState {
  sounds: string[];
  correct: string[];
  error: string[];
}

function sortSounds(arr: string[]) {
  return arr.sort(() => Math.random() - 0.5);
}

const Game = ({ cards }: GameProps) => {
  const sounds = [...cards].reduce((arr, info) => {
    arr.push(info.audioSrc);
    return arr;
  }, [] as string[]);
  const [gameState, setGameState] = useState<GameState>({
    sounds: sortSounds(sounds),
    correct: [],
    error: [],
  });
  const [play] = useSound(`./cards/${gameState.sounds[gameState.sounds.length - 1]}`);
  const [playError] = useSound(`./cards/audio/error.mp3`);
  const [playCorrect] = useSound(`./cards/audio/correct.mp3`);

  const { state, dispatch } = useStateContext();
  const checkAnswer = async (answer: string, curAnswer: string) => {
    if (answer !== curAnswer) {
      playError();
      return;
    }

    playCorrect();
    setGameState((curGameState) => {
      return { ...curGameState, sounds: gameState.sounds.slice(0, -1) };
    });
    play();
  };
  const cardsList = cards.map((card) => (
    <Card
      key={card.translation}
      word={card.word}
      translation={card.translation}
      image={card.image}
      audioSrc={card.audioSrc}
      gameClick={() => checkAnswer(gameState.sounds[gameState.sounds.length - 1], card.audioSrc)}
    />
  ));

  return (
    <>
      <CardsField>{cardsList}</CardsField>

      {state.mode === 'game' && !state.isGame && (
        <button
          type="button"
          className="page__start-btn"
          onClick={() => {
            dispatch({ type: 'start game' });
            setTimeout(() => play(), 500);
          }}
        >
          ✿ Start game ✿
        </button>
      )}

      {state.mode === 'game' && state.isGame && (
        <>
          <button type="button" className="page__replay-btn" onClick={() => play()}>
            ♪ Repeat
          </button>
          <RatingScale />
        </>
      )}
    </>
  );
};

export default Game;
