import { CardInformation } from '../../constants';
// import CardsField from '../../components/cards-field/cards-field';
// import Card from '../../components/card';
// import RatingScale from '../../components/rating-scale';
// import { useStateContext } from '../../shared';
import Game from '../../components/game';
import './category-page.css';

interface CategoryPageInterface {
  title: string;
  cards: CardInformation[];
}

const CategoryPage = ({ title, cards }: CategoryPageInterface) => {
  // const { state, dispatch } = useStateContext();
  // const cardsList = cards.map((card) => (
  //   <Card
  //     key={card.translation}
  //     word={card.word}
  //     translation={card.translation}
  //     image={card.image}
  //     audioSrc={card.audioSrc}
  //   />
  // ));

  return (
    <div className="page__content">
      <h1 className="page__title">{title}</h1>
      <Game cards={cards} />
      {/* <CardsField>{cardsList}</CardsField>

      {state.mode === 'game' && state.isGame === false && (
        <button type="button" className="page__start-btn" onClick={() => dispatch({ type: 'start game' })}>
          ✿ Start game ✿
        </button>
      )}

      {state.mode === 'game' && state.isGame === true && (
        <>
          <button type="button" className="page__replay-btn">
            ♪ Repeat
          </button>
          <RatingScale />
        </>
      )} */}
    </div>
  );
};

export default CategoryPage;
