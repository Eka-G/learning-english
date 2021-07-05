import { useReducer, useEffect, useRef } from 'react';
import { useSound } from 'use-sound';
import { CardInformation } from '../../constants';
import { useStateContext } from '../../shared';
import CardsField from '../cards-field/cards-field';
import Card from '../card';
import RatingScale from '../rating-scale';
import gameReducer from './game-reduser';

interface GameProps {
  cards: CardInformation[];
}

function sortSounds(arr: string[]) {
  return arr.sort(() => Math.random() - 0.5);
}

const Game = ({ cards }: GameProps) => {
  const { state, dispatch } = useStateContext();
  const timeOutId = useRef<number | undefined>();

  const sounds = [...cards].reduce((arr, info) => {
    arr.push(info.audioSrc);
    return arr;
  }, [] as string[]);

  const [gameState, gameDispatch] = useReducer(gameReducer, {
    sounds: sortSounds(sounds),
    correctList: [],
    errorList: [],
    disabled: false,
  });

  const playOptions = {
    onplay: () => {
      gameDispatch({ type: 'on disabled' });
    },
    onend: () => {
      gameDispatch({ type: 'off disabled' });
    },
  };

  const [play] = useSound(`./cards/${gameState.sounds[gameState.sounds.length - 1]}`, playOptions);
  const [playError] = useSound(`./cards/audio/error.mp3`, playOptions);
  const [playCorrect] = useSound(`./cards/audio/correct.mp3`, playOptions);
  useEffect(() => {
    if (!state.isGame || state.mode !== 'game') {
      return () => {
        window.clearTimeout(timeOutId.current);
      };
    }

    timeOutId.current = window.setTimeout(() => play({}), 500);

    return () => {
      window.clearTimeout(timeOutId.current);
    };
  }, [play, state.mode, state.isGame]);

  const checkAnswer = (answer: string, curAnswer: string) => {
    if (answer !== curAnswer) {
      playError();
      return;
    }

    playCorrect();
    gameDispatch({ type: 'next sound' });
  };

  const cardsList = cards.map((card) => (
    <Card
      key={card.translation}
      word={card.word}
      translation={card.translation}
      image={card.image}
      audioSrc={card.audioSrc}
      gameClick={() => checkAnswer(gameState.sounds[gameState.sounds.length - 1], card.audioSrc)}
      disabled={gameState.disabled}
      isCorrect={false}
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
