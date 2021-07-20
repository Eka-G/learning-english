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

  const [play] = useSound(`${gameState.sounds[gameState.sounds.length - 1]}`, playOptions);
  const [playError] = useSound(
    'https://res.cloudinary.com/drkkqcud9/video/upload/v1626539341/audio/error_yvnzbj.mp3',
    playOptions,
  );
  const [playCorrect] = useSound(
    'https://res.cloudinary.com/drkkqcud9/video/upload/v1626539338/audio/correct_vp9lp9.mp3',
    playOptions,
  );
  const [playSuccess] = useSound(
    'https://res.cloudinary.com/drkkqcud9/video/upload/v1626539351/audio/success_t2hpca.mp3',
    playOptions,
  );
  const [playFail] = useSound(
    'https://res.cloudinary.com/drkkqcud9/video/upload/v1626539341/audio/failure_ddgtdi.mp3',
    playOptions,
  );

  useEffect(() => {
    if (!state.isGame || state.gameMode !== 'game') {
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
    state.gameMode,
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
      {state.gameMode === 'train' && (
        <>
          <CardsField isAdmin={false}>{cardsList}</CardsField>{' '}
        </>
      )}

      {state.gameMode === 'game' && !state.isGame && (
        <>
          <CardsField isAdmin={false}>{cardsList}</CardsField>
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

      {state.gameMode === 'game' && state.isGame && gameState.sounds.length !== 0 && (
        <>
          <CardsField isAdmin={false}>{cardsList}</CardsField>
          <button type="button" className="page__replay-btn" onClick={() => play()}>
            ♪ Repeat
          </button>
          <RatingScale correct={gameState.correct} error={gameState.error} />
        </>
      )}

      {state.gameMode === 'game' && state.isGame && gameState.sounds.length === 0 && <Modal errors={gameState.error} />}
    </>
  );
};

export default Game;
