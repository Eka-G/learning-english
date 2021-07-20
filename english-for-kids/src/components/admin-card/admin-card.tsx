import { useState } from 'react';
import { useSound } from 'use-sound';
import { IInitionalState, ICard } from '../../shared';
import { deleteCard } from '../../api';
import UpdateForm from '../update-form';
import './admin-card.css';

interface AdminCardProps extends ICard {
  isNew: boolean;
  categoryName: string;
  forceRender: () => void;
}

const AdminCard = ({ _id, word, translation, image, audioSrc, isNew, categoryName, forceRender }: AdminCardProps) => {
  const [play] = useSound(audioSrc);
  const initionalState: IInitionalState = {
    inUpdating: false,
    curWord: word,
    curTranslation: translation,
    curImage: image,
    curAudioSrc: audioSrc,
    itIsNew: isNew,
    categoryName,
    isDeleted: false,
  };
  const [state, setState] = useState(initionalState);

  const changeWord = (event: React.FormEvent<HTMLInputElement>) => {
    if (!event) return;

    setState({ ...state, curWord: event.currentTarget.value });
  };
  const changeTranslation = (event: React.FormEvent<HTMLInputElement>) => {
    if (!event) return;

    setState({ ...state, curTranslation: event.currentTarget.value });
  };
  const changeImg = (event: React.FormEvent<HTMLInputElement>) => {
    if (!event) return;

    setState({ ...state, curImage: event.currentTarget.value });
  };
  const changeAudio = (event: React.FormEvent<HTMLInputElement>) => {
    if (!event) return;

    setState({ ...state, curAudioSrc: event.currentTarget.value });
  };
  const changeState = (newState: IInitionalState) => {
    setState({ ...newState });
    forceRender();
  };
  const changeUpdating = () => {
    setState({ ...state, inUpdating: false });
    forceRender();
  };

  return (
    <>
      {state.isDeleted ? null : (
        <div className="admin-card">
          {!isNew && !state.inUpdating && (
            <>
              <div
                role="none"
                className="admin-card__delete"
                onClick={() => {
                  deleteCard(_id);
                  setState({ ...state, isDeleted: true });
                }}
              />
              <div className="admin-card__info">
                <p className="admin-card__item">Word: {word}</p>
                <p className="admin-card__item">Translation: {translation}</p>
                <div className="admin-card__item">
                  <p className="admin-card__audio">Sound file: {`${word}.mp3`}</p>
                  <button type="button" className="admin-card__audio-btn" onClick={() => play()}>
                    ▶ play
                  </button>
                </div>
                <div className="admin-card__item">
                  <p>Image:</p>
                  <img src={image} alt={word} className="admin-card__img" />
                </div>
              </div>

              <button
                type="button"
                className="admin-card__btn btn"
                onClick={() => setState({ ...state, inUpdating: true })}
              >
                ✎ Change
              </button>
            </>
          )}

          {state.inUpdating && (
            <UpdateForm
              id={_id}
              inUpdating={state.itIsNew}
              curWord={state.curWord}
              curTranslation={state.curTranslation}
              curImage={state.curImage}
              curAudioSrc={state.curAudioSrc}
              itIsNew={state.itIsNew}
              categoryName={categoryName}
              isDeleted={state.isDeleted}
              changeWord={changeWord}
              changeTranslation={changeTranslation}
              changeImg={changeImg}
              changeAudio={changeAudio}
              changeState={changeState}
              changeUpdating={changeUpdating}
            />
          )}

          {!state.inUpdating && state.itIsNew && (
            <div className="admin-card__create">
              <h2 className="admin-card__title">Add new word</h2>
              <button
                type="button"
                className="admin-card__create-btn"
                onClick={() => setState({ ...state, inUpdating: true })}
              >
                +
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AdminCard;
