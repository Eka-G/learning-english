import { CATEGORIES, CARDS } from '../../constants';
import CardsField from '../../components/cards-field/cards-field';
import Category from '../../components/category/category';

const MainPage = () => {
  const cardsCategories = Object.entries(CARDS).map((category) => (
    <Category
      key={category[0]}
      title={category[0]}
      quantity={category[1].length}
      img={category[1][1].image}
      path={CATEGORIES[category[0]] || '/'}
    />
  ));
  return (
    <div className="page__content">
      <h1 className="page__title">Welcome to the game!</h1>
      <p className="page__text">
        Please choose the category. TRAIN: in each of category you need to learn the words. GAME: test yourself(click
        the switcher at the top):
      </p>
      <CardsField isAdmin={false}>{cardsCategories}</CardsField>
    </div>
  );
};

export default MainPage;
