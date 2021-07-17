import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import { getCards } from '../../api';
import CardsField from '../../components/cards-field';
import AdminCard from '../../components/admin-card';
import './admin-words-page.css';

const AdminWordsPage = () => {
  const { name } = useParams<{ name: string }>();
  const { data } = useSWR(name, getCards);

  return (
    <div className="page__content">
      <CardsField isAdmin>
        {data?.cards.map((item) => {
          return (
            <AdminCard
              key={item._id}
              word={item.word}
              translation={item.translation}
              image={item.image}
              audioSrc={item.audioSrc}
              isNew={false}
              category={data.name}
            />
          );
        }) || null}
        <AdminCard word="" translation="" image="" audioSrc="" isNew category="" />
      </CardsField>
    </div>
  );
};

export default AdminWordsPage;
