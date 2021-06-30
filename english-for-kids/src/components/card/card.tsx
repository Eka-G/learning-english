import './card.css';

interface CardProps {
  title: string;
  quantity: number;
  img: string;
}

const Card = ({ title, quantity, img }: CardProps) => {
  const imgStyle = {
    backgroundImage: `url(./cards/${img})`,
  };

  return (
    <div className="card">
      <div className="card__img" style={imgStyle} />
      <div className="card__info">
        <h2 className="card__title">{title}</h2>
        <p className="card__text">{`${quantity} cards`}</p>
      </div>
    </div>
  );
};

export default Card;
