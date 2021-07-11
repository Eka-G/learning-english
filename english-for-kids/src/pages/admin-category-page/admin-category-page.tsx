import CardsField from '../../components/cards-field';
import AdminCategory from '../../components/admin-category';
import './admin-category-page.css';

const AdminCategoryPage = () => {
  return (
    <div className="page__content">
      <CardsField>
        <AdminCategory title="Clothes" quantity={8} isNew={false} />
        <AdminCategory title="Create new category" quantity={8} isNew />
      </CardsField>
    </div>
  );
};

export default AdminCategoryPage;
