import { CATEGORIES, CARDS } from '../../constants';
import CardsField from '../../components/cards-field/cards-field';
import Category from '../../components/category/category';

const MainPage = () => {
  const cardsCategories = Object.entries(CARDS).map((category) => (
    <Category
      title={category[0]}
      quantity={category[1].length}
      img={category[1][1].image}
      path={CATEGORIES[category[0]] || '/'}
    />
  ));
  return (
    <div className="page-content">
      <CardsField>{cardsCategories}</CardsField>
    </div>
  );
};

export default MainPage;
