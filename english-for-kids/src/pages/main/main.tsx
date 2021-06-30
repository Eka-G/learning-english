import CardsField from '../../components/cards-field/cards-field';
import Card from '../../components/card/card';

const MainPage = () => {
  const cardsNum = 8;
  return (
    <div className="page-content">
      <CardsField>
        <Card title="Category1" quantity={cardsNum} img="img/bird.jpg" />
        <Card title="Category1" quantity={8} img="img/bird.jpg" />
        <Card title="Category1" quantity={8} img="img/bird.jpg" />
        <Card title="Category1" quantity={8} img="img/bird.jpg" />
        <Card title="Category1" quantity={8} img="img/bird.jpg" />
        <Card title="Category1" quantity={8} img="img/bird.jpg" />
        <Card title="Category1" quantity={8} img="img/bird.jpg" />
        <Card title="Category1" quantity={8} img="img/bird.jpg" />
      </CardsField>
    </div>
  );
};

export default MainPage;
