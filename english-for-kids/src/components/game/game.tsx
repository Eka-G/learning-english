import { useState, useReducer, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSound } from 'use-sound';
import { CardInformation } from '../../constants';
import { useStateContext } from '../../shared';
import CardsField from '../cards-field/cards-field';
import Card from '../card';
import RatingScale from '../rating-scale';
import Modal from '../modal';
import gameReducer from './game-reduser';
import { InitialGameState } from './game-initial-state';

interface GameProps {
  cards: CardInformation[];
}

function sortSounds(arr: string[]) {
  return arr.sort(() => Math.random() - 0.5);
}

const Game = ({ cards }: GameProps) => {
  const history = useHistory();
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);
  const { state, dispatch } = useStateContext();
  const timeOutId = useRef<number | undefined>();

  const sounds = [...cards].reduce((arr, info) => {
    arr.push(info.audioSrc);
    return arr;
  }, [] as string[]);

  const [gameState, gameDispatch] = useReducer(gameReducer, { ...InitialGameState, sounds: sortSounds(sounds) });

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
  const [playSuccess] = useSound(`./cards/audio/success.mp3`, playOptions);
  const [playFail] = useSound(`./cards/audio/failure.mp3`, playOptions);

  useEffect(() => {
    if (!state.isGame || state.mode !== 'game') {
      dispatch({ type: 'finish game' });
      return () => {
        window.clearTimeout(timeOutId.current);
      };
    }

    timeOutId.current = window.setTimeout(() => play({}), 500);
    if (gameState.sounds.length === 0) {
      gameState.error === 0 ? playSuccess() : playFail();
      setTimeout(() => {
        dispatch({ type: 'finish game' });
        history.push('/');
      }, 4000);
    }

    return () => {
      window.clearTimeout(timeOutId.current);
    };
  }, [
    play,
    state.mode,
    state.isGame,
    gameState.sounds.length,
    history,
    gameState.error,
    playSuccess,
    playFail,
    dispatch,
  ]);

  const checkAnswer = (answer: string, curAnswer: string) => {
    if (answer !== curAnswer) {
      playError();
      gameDispatch({ type: 'invalid card' });
      return;
    }

    playCorrect();
    setCorrectAnswers([...correctAnswers, curAnswer]);
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
      isCorrect={correctAnswers.some((item) => item === card.audioSrc)}
    />
  ));

  return (
    <>
      {state.mode === 'train' && (
        <>
          <CardsField>{cardsList}</CardsField>{' '}
        </>
      )}

      {state.mode === 'game' && !state.isGame && (
        <>
          <CardsField>{cardsList}</CardsField>
          <button
            type="button"
            className="page__start-btn"
            onClick={() => {
              dispatch({ type: 'start game' });
            }}
          >
            ✿ Start game ✿
          </button>
        </>
      )}

      {state.mode === 'game' && state.isGame && gameState.sounds.length !== 0 && (
        <>
          <CardsField>{cardsList}</CardsField>
          <button type="button" className="page__replay-btn" onClick={() => play()}>
            ♪ Repeat
          </button>
          <RatingScale correct={gameState.correct} error={gameState.error} />
        </>
      )}

      {state.mode === 'game' && state.isGame && gameState.sounds.length === 0 && <Modal errors={gameState.error} />}
    </>
  );
};

export default Game;
