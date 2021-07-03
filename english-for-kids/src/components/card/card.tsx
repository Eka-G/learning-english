import { useState } from 'react';
import { useSound } from 'use-sound';
import { CardInformation } from '../../constants';
import { useStateContext } from '../../shared';
import './card.css';

const Card = ({ word, translation, image, audioSrc }: CardInformation) => {
  const { state } = useStateContext();
  const [activeClass, setActiveClass] = useState(false);
  const [play] = useSound(`./cards/${audioSrc}`);
  const imgStyle = {
    backgroundImage: `url(./cards/${image})`,
  };
  const onCardClick = () => {
    play();
  };
  const onArrowClick = async () => {
    setActiveClass(!activeClass);
  };
  const onMouseLeave = () => {
    if (!activeClass) return;
    setActiveClass(!activeClass);
  };

  return (
    <div className="card-container">
      {state.mode === 'train' && (
        <div
          role="none"
          className={activeClass ? 'card card--active' : 'card'}
          onClick={onCardClick}
          onMouseLeave={onMouseLeave}
          onBlur={() => 0}
        >
          <div className="card__front">
            <div className="card__img" style={imgStyle} />
            <div className="card__info">
              <h2 className="card__title">{word}</h2>
              <div role="none" className="card__turn" onClick={onArrowClick} />
            </div>
          </div>

          <div className="card__back">
            <div className="card__img" style={imgStyle} />
            <div className="card__info">
              <h2 className="card__title">{translation}</h2>
            </div>
          </div>
        </div>
      )}

      {state.mode === 'game' && (
        <div className="card">
          <div className="card__img" style={{ ...imgStyle, height: '100%' }} />
        </div>
      )}
    </div>
  );
};

export default Card;
