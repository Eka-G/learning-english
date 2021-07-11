import './admin-category.css';

interface AdminCategoryProps {
  title: string;
  quantity: number;
  isNew: boolean;
}

const AdminCategory = ({ title, quantity, isNew }: AdminCategoryProps) => {
  return (
    <div className="admin-category">
      <h2 className="admin-category__title">{title}</h2>
      {!isNew && (
        <>
          <div className="admin-category__delete" />
          <p className="admin-category__text">{`words: ${quantity}`}</p>

          <div className="admin-category__btns">
            <button type="button" className="admin-category__btn btn">
              🛠 Update
            </button>
            <button type="button" className="admin-category__btn btn btn">
              ✎ Add word
            </button>
          </div>
        </>
      )}

      {isNew && (
        <button type="button" className="admin-category__create-btn">
          +
        </button>
      )}
    </div>
  );
};

export default AdminCategory;
