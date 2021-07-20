import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import Game from '../../components/game';
import './category-page.css';
import { getCards } from '../../api';

const CategoryPage = () => {
  const { name } = useParams<{ name: string }>();
  const { data } = useSWR([name], getCards);

  return (
    <div className="page__content">
      <h1 className="page__title">{name}</h1>
      {data ? <Game cards={data.cards} /> : null}
    </div>
  );
};

export default CategoryPage;
