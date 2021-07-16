import useSWR from 'swr';
import CardsField from '../../components/cards-field';
import AdminCategory from '../../components/admin-category';
import { getCategories, CATEGORIES_KEY } from '../../api';
import './admin-category-page.css';

const AdminCategoryPage = () => {
  const { data } = useSWR(CATEGORIES_KEY, getCategories);

  return (
    <div className="page__content">
      <CardsField isAdmin={false}>
        {data?.map((item) => {
          return <AdminCategory key={item._id} title={item.name} quantity={item.cards.length} isNew={false} />;
        }) || null}
        <AdminCategory title="Create new category" quantity={8} isNew />
      </CardsField>
    </div>
  );
};

export default AdminCategoryPage;
