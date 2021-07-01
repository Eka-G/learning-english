import { CardInformation } from '../../constants';
import './card.css';

const Card = ({ word, translation, image, audioSrc }: CardInformation) => {
  const imgStyle = {
    backgroundImage: `url(./cards/${image})`,
  };

  return (
    <div className="card">
      <div className="card__img" style={imgStyle} />
      <div className="card__info">
        <h2 className="card__title">{translation}</h2>
        <p className="card__text">{`${audioSrc} cards`}</p>
      </div>
    </div>
    // <div className="card-container">
    //   <div className="card">
    //     <div className="card__front">
    //       <div className="card__img" style={imgStyle} />
    //       <div className="card__info">
    //         <h2 className="card__title">{word}</h2>
    //       </div>
    //     </div>

    //     <div className="card__back">
    //       <div className="card__img" style={imgStyle} />
    //       <div className="card__info">
    //         <h2 className="card__title">{translation}</h2>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Card;
