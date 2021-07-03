import { CardInformation } from '../../constants';
import CardsField from '../../components/cards-field/cards-field';
import Card from '../../components/card';
import { useStateContext } from '../../shared';
import './category-page.css';

interface CategoryPageInterface {
  title: string;
  cards: CardInformation[];
}

const CategoryPage = ({ title, cards }: CategoryPageInterface) => {
  const { state } = useStateContext();
  const cardsList = cards.map((card) => (
    <Card
      key={card.translation}
      word={card.word}
      translation={card.translation}
      image={card.image}
      audioSrc={card.audioSrc}
    />
  ));

  return (
    <div className="page__content">
      <h1 className="page__title">{title}</h1>
      <CardsField>{cardsList}</CardsField>
      {state.mode === 'game' && (
        <button type="button" className="page__start-btn">
          ✿ Start game ✿
        </button>
      )}
    </div>
  );
};

export default CategoryPage;
