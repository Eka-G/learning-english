import { useState } from 'react';
import { IInitionalState, defaultImgUrl, defaultAudioUrl } from '../../shared';
import { updateCard, createCard } from '../../api';
import './update-form.css';

interface IUpdateForm extends IInitionalState {
  id: string;
  changeWord: (event: React.FormEvent<HTMLInputElement>) => void;
  changeTranslation: (event: React.FormEvent<HTMLInputElement>) => void;
  changeImg: (event: React.FormEvent<HTMLInputElement>) => void;
  changeAudio: (event: React.FormEvent<HTMLInputElement>) => void;
  changeState: (newState: IInitionalState) => void;
  changeUpdating: () => void;
}

const UpdateForm = ({
  id,
  inUpdating,
  curWord,
  curTranslation,
  curImage,
  curAudioSrc,
  itIsNew,
  categoryName,
  isDeleted,
  changeWord,
  changeTranslation,
  changeImg,
  changeAudio,
  changeState,
  changeUpdating,
}: IUpdateForm) => {
  const initionalState: IInitionalState = {
    inUpdating,
    curWord,
    curTranslation,
    curImage,
    curAudioSrc,
    itIsNew,
    categoryName,
    isDeleted,
  };
  const [state, setState] = useState(initionalState);

  return (
    <form className="admin-card__form">
      <div className="form-content">
        <label htmlFor="card-word" className="admin-card__update-item">
          Word:
          <input
            id="card-name"
            className="admin-card__input"
            type="text"
            value={curWord}
            onChange={(event) => {
              setState({ ...state, curWord: event.currentTarget.value });
              changeWord(event);
            }}
          />
        </label>

        <label htmlFor="card-translation" className="admin-card__update-item">
          Translation:
          <input
            id="card-translation"
            className="admin-card__input"
            type="text"
            value={curTranslation}
            onChange={(event) => {
              setState({ ...state, curTranslation: event.currentTarget.value });
              changeTranslation(event);
            }}
          />
        </label>

        <label htmlFor="card-img" className="admin-card__update-item">
          Image URL:
          <input
            id="card-img"
            className="admin-card__input"
            type="text"
            value={curImage}
            onChange={(event) => {
              setState({ ...state, curImage: event.currentTarget.value });
              changeImg(event);
            }}
          />
        </label>

        <label htmlFor="card-audio" className="admin-card__update-item">
          Audio URL{' '}
          <span className="admin-card__comment">(if you leave it empty, it will be filled in automatically)</span>:
          <input
            id="card-audio"
            className="admin-card__input"
            type="text"
            value={curAudioSrc}
            onChange={(event) => {
              setState({ ...state, curAudioSrc: event.currentTarget.value });
              changeAudio(event);
            }}
          />
        </label>
      </div>

      <div className="admin-card__btns">
        <button type="button" className="admin-card__btn btn" onClick={() => changeState(initionalState)}>
          Cancel
        </button>

        <button
          type="submit"
          className="admin-card__btn btn"
          onClick={async (e) => {
            e.preventDefault();

            if (itIsNew) {
              const img = curImage || defaultImgUrl;
              const audio = curAudioSrc || `${defaultAudioUrl}/${curWord}.mp3`;
              await createCard({
                categoryName,
                word: curWord,
                translation: curTranslation,
                image: img,
                audioSrc: audio,
              });
            } else {
              await updateCard(id, {
                word: curWord,
                translation: curTranslation,
                image: curImage,
                audioSrc: curAudioSrc,
              });
            }

            changeUpdating();
          }}
        >
          OK
        </button>
      </div>
    </form>
  );
};

export default UpdateForm;
