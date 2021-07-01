import { CardInformation } from '../../constants';
import CardsField from '../../components/cards-field/cards-field';
import Card from '../../components/card';

interface CategoryPageInterface {
  title: string;
  cards: CardInformation[];
}

const CategoryPage = ({ title, cards }: CategoryPageInterface) => {
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
    </div>
  );
};

export default CategoryPage;
