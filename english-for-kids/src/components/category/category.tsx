import { Link } from 'react-router-dom';
import './category.css';

interface CategoryProps {
  title: string;
  quantity: number;
  img: string;
  path: string;
}

const Category = ({ title, quantity, img, path }: CategoryProps) => {
  const imgStyle = {
    backgroundImage: `url(./cards/${img})`,
  };

  return (
    <Link className="card" to={path}>
      <div className="card__img" style={imgStyle} />
      <div className="card__info">
        <h2 className="card__title">{title}</h2>
        <p className="card__text">{`${quantity} cards`}</p>
      </div>
    </Link>
  );
};

export default Category;
