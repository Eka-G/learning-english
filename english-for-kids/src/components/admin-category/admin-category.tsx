import { useState } from 'react';
import { updateCategory } from '../../api';
import './admin-category.css';

interface AdminCategoryProps {
  title: string;
  quantity: number;
  isNew: boolean;
}

const AdminCategory = ({ title, quantity, isNew = false }: AdminCategoryProps) => {
  const initionalState = {
    inUpdating: false,
    curTitle: title,
    newName: '',
  };
  const [state, setState] = useState(initionalState);

  return (
    <div className="admin-category">
      {!isNew && !state.inUpdating && (
        <>
          <h2 className="admin-category__title">{state.curTitle}</h2>
          <div className="admin-category__delete" />
          <p className="admin-category__text">{`words: ${quantity}`}</p>

          <div className="admin-category__btns">
            <button
              type="button"
              className="admin-category__btn btn"
              onClick={() => setState({ ...state, inUpdating: true })}
            >
              🛠 Update
            </button>
            <button type="button" className="admin-category__btn btn btn">
              ✎ Add word
            </button>
          </div>
        </>
      )}

      {state.inUpdating && (
        <form className="admin-category__form">
          <label htmlFor="category-name" className="admin-category__title">
            Category name:
            {!isNew && (
              <input
                id="category-name"
                className="admin-category__input"
                type="text"
                value={state.curTitle}
                onChange={(event) => setState({ ...state, curTitle: event.currentTarget.value })}
              />
            )}
            {isNew && <input id="category-name" className="admin-category__input" type="text" />}
          </label>

          <div className="admin-category__btns">
            <button type="button" className="admin-category__btn btn" onClick={() => setState(initionalState)}>
              Cancel
            </button>

            {!isNew && (
              <button
                type="submit"
                className="admin-category__btn btn btn"
                onClick={async (e) => {
                  e.preventDefault();
                  await updateCategory(title, state.curTitle);
                  setState({ ...state, inUpdating: false });
                }}
              >
                OK
              </button>
            )}
            {isNew && (
              <button type="submit" className="admin-category__btn btn btn">
                CREATE
              </button>
            )}
          </div>
        </form>
      )}

      {isNew && (
        <>
          <h2 className="admin-category__title">{title}</h2>
          <button type="button" className="admin-category__create-btn">
            +
          </button>
        </>
      )}
    </div>
  );
};

export default AdminCategory;
