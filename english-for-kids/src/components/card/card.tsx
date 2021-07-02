import { useState } from 'react';
import { useSound } from 'use-sound';
import { CardInformation } from '../../constants';
import './card.css';

const Card = ({ word, translation, image, audioSrc }: CardInformation) => {
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
  const onMouseOut = () => {
    setActiveClass(!activeClass);
  };

  return (
    <div role="none" className="card-container" onClick={onCardClick} onMouseOut={onMouseOut} onBlur={() => 0}>
      <div className={activeClass ? 'card card--active' : 'card'}>
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
    </div>
  );
};

export default Card;
