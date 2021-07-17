import { useSound } from 'use-sound';
import { CardInformation } from '../../constants';
import './admin-card.css';

interface AdminCardProps extends CardInformation {
  isNew: boolean;
  category: string;
}

const AdminCard = ({ word, translation, image, audioSrc, isNew, category }: AdminCardProps) => {
  const [play] = useSound(audioSrc);

  return (
    <div className="admin-card">
      <div className="admin-card__delete" />
      {!isNew && (
        <>
          <div className="admin-card__info">
            <p className="admin-card__item">Word: {word}</p>
            <p className="admin-card__item">Translation: {translation}</p>
            <div className="admin-card__item">
              <p className="admin-card__audio">Sound file: {`${word}.mp3`}</p>
              <button type="button" className="admin-card__audio-btn" onClick={() => play()}>
                play ▶
              </button>
            </div>
            <div className="admin-card__item">
              <p>Image:</p>
              <img src={image} alt={word} className="admin-card__img" />
            </div>
          </div>

          <button type="button" className="admin-card__btn btn">
            ✎ Change
          </button>
        </>
      )}

      {isNew && (
        <div className="admin-card__create">
          <h2 className="admin-card__title">Add new word</h2>
          <button type="button" className="admin-card__create-btn">
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminCard;
