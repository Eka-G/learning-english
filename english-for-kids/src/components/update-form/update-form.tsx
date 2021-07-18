import { useState } from 'react';
import { IInitionalState } from '../../shared';
import { updateCard } from '../../api';
import './update-form.css';

interface IUpdateForm extends IInitionalState {
  category: string;
  changeWord: (event: React.FormEvent<HTMLInputElement>) => void;
  changeTranslation: (event: React.FormEvent<HTMLInputElement>) => void;
  changeState: (newState: IInitionalState) => void;
  changeUpdating: () => void;
}

const UpdateForm = ({
  category,
  inUpdating,
  curWord,
  curTranslation,
  curImage,
  curAudioSrc,
  itIsNew,
  isDeleted,
  changeWord,
  changeTranslation,
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

        <div className="admin-card__assets admin-card__update-item">
          <span>Image:</span>
          <button
            type="submit"
            className="admin-card__btn btn"
            onClick={async (e) => {
              e.preventDefault();
              // await updatecard(word, curWord);
              // setState({ ...state, inUpdating: false });
            }}
          >
            Select file
          </button>
        </div>

        <div className="admin-card__assets admin-card__update-item">
          <span>Sound:</span>
          <button
            type="submit"
            className="admin-card__btn btn"
            onClick={async (e) => {
              e.preventDefault();
              // await updatecard(word, curWord);
              // setState({ ...state, inUpdating: false });
            }}
          >
            Select file
          </button>
        </div>
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
            await updateCard(curTranslation, {
              categoryName: category,
              word: curWord,
              translation: curTranslation,
              image: curImage,
              audioSrc: curAudioSrc,
            });
            changeUpdating();
          }}
        >
          UPDATE
        </button>
      </div>
    </form>
  );
};

export default UpdateForm;
