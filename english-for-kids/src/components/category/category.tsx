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
    <Link className="category" to={path}>
      <div className="category__img" style={imgStyle} />
      <div className="category__info">
        <h2 className="category__title">{title}</h2>
        <p className="category__text">{`${quantity} cards`}</p>
      </div>
    </Link>
  );
};

export default Category;
