import { CardInformation } from '../../constants';
import Game from '../../components/game';
import './category-page.css';

interface CategoryPageInterface {
  title: string;
  cards: CardInformation[];
}

const CategoryPage = ({ title, cards }: CategoryPageInterface) => {
  return (
    <div className="page__content">
      <h1 className="page__title">{title}</h1>
      <Game cards={cards} />
    </div>
  );
};

export default CategoryPage;
