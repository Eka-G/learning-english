import { Link } from 'react-router-dom';
import { useStateContext } from '../../shared';
import './admin-category.css';

interface CategoryProps {
  title: string;
  quantity: number;
  img: string;
  path: string;
}

const Category = ({ title, quantity, img, path }: CategoryProps) => {
  const { state } = useStateContext();
  const imgStyle = {
    backgroundImage: `url(./cards/${img})`,
  };
  const backgroundStyle = {
    backgroundColor: state.mode === 'train' ? 'var(--main-elem-color)' : 'var(--bg-color)',
  };

  return (
    <Link className="category" to={path} style={backgroundStyle}>
      <div className="category__img" style={imgStyle} />
      <div className="category__info">
        <h2 className="category__title">{title}</h2>
        <p className="category__text">{`${quantity} cards`}</p>
      </div>
    </Link>
  );
};

export default Category;
