import { NAV_ITEMS, CARDS } from '../../constants';
import CardsField from '../../components/cards-field/cards-field';
import Card from '../../components/card/card';

const MainPage = () => {
  const cardsCategories = Object.entries(CARDS).map((category) => (
    <Card
      title={category[0]}
      quantity={category[1].length}
      img={category[1][1].image}
      path={NAV_ITEMS[category[0]] || '/'}
    />
  ));
  return (
    <div className="page-content">
      <CardsField>{cardsCategories}</CardsField>
    </div>
  );
};

export default MainPage;
