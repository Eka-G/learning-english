import { useState } from 'react';
import useSWR from 'swr';
import CardsField from '../../components/cards-field';
import AdminCategory from '../../components/admin-category';
import { getCategories, CATEGORIES_KEY } from '../../api';
import './admin-category-page.css';

const AdminCategoryPage = () => {
  const [state, setState] = useState({});
  const { data } = useSWR([state, CATEGORIES_KEY], getCategories);

  return (
    <div className="page__content">
      <CardsField isAdmin={false}>
        {data?.map((item) => {
          return (
            <AdminCategory
              key={item._id}
              id={item._id}
              title={item.name}
              quantity={item.cards.length}
              isNew={false}
              forceRender={() => setState({})}
            />
          );
        }) || null}
        <AdminCategory id="" title="Create new category" quantity={8} isNew forceRender={() => setState({})} />
      </CardsField>
    </div>
  );
};

export default AdminCategoryPage;
