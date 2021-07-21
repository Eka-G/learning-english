import useSWR from 'swr';
import { getCategories, CATEGORIES_KEY, getImages } from '../../api';
import CardsField from '../../components/cards-field/cards-field';
import Category from '../../components/category/category';

const MainPage = () => {
  const categoriesRes = useSWR(CATEGORIES_KEY, getCategories);
  const cardsRes = useSWR([categoriesRes.data], getImages);

  const cardsCategories = categoriesRes.data?.map((category, i) =>
    cardsRes.data ? (
      <Category
        key={category._id}
        title={category.name}
        quantity={category.cards.length}
        img={cardsRes.data[i]}
        path={category.name || '/'}
      />
    ) : null,
  );

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
