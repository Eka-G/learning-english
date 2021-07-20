import { useState } from 'react';
import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import { getCards } from '../../api';
import CardsField from '../../components/cards-field';
import AdminCard from '../../components/admin-card';
import './admin-words-page.css';

const AdminWordsPage = () => {
  const { name } = useParams<{ name: string }>();
  const [state, setState] = useState({ name });
  const { data } = useSWR([state, name], getCards);

  return (
    <div className="page__content">
      <h1 className="page__title">{name}</h1>
      <CardsField isAdmin>
        {data?.cards.map((item) => {
          return (
            <AdminCard
              key={item._id}
              _id={item._id}
              word={item.word}
              translation={item.translation}
              image={item.image}
              audioSrc={item.audioSrc}
              isNew={false}
              forceRender={() => setState({ name })}
            />
          );
        }) || null}
        <AdminCard _id="" word="" translation="" image="" audioSrc="" isNew forceRender={() => setState({ name })} />
      </CardsField>
    </div>
  );
};

export default AdminWordsPage;
