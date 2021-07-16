import { useState } from 'react';
import { updateCategory, deleteCategory, createCategory } from '../../api';
import './admin-category.css';

interface AdminCategoryProps {
  title: string;
  quantity: number;
  isNew: boolean;
  forceRender: () => void;
}

const AdminCategory = ({ title, quantity, isNew = false, forceRender = () => {} }: AdminCategoryProps) => {
  const initionalState = {
    inUpdating: false,
    curTitle: title,
    itIsNew: isNew,
    newName: '',
    isDeleted: false,
  };
  const [state, setState] = useState(initionalState);

  return (
    <>
      {state.isDeleted ? null : (
        <div className="admin-category">
          {!state.itIsNew && !state.inUpdating && (
            <>
              <h2 className="admin-category__title">{state.curTitle}</h2>
              <div
                role="none"
                className="admin-category__delete"
                onClick={() => {
                  deleteCategory(state.curTitle);
                  setState({ ...state, isDeleted: true });
                }}
              >
                {' '}
              </div>
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
                {state.inUpdating && !state.itIsNew && (
                  <input
                    id="category-name"
                    className="admin-category__input"
                    type="text"
                    value={state.curTitle}
                    onChange={(event) => setState({ ...state, curTitle: event.currentTarget.value })}
                  />
                )}
                {state.inUpdating && state.itIsNew && (
                  <input
                    id="category-name"
                    className="admin-category__input"
                    type="text"
                    onChange={(event) => {
                      setState({ ...state, curTitle: event.currentTarget.value });
                    }}
                  />
                )}
              </label>

              <div className="admin-category__btns">
                <button type="button" className="admin-category__btn btn" onClick={() => setState(initionalState)}>
                  Cancel
                </button>

                {state.inUpdating && !state.itIsNew && (
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

                {state.itIsNew && (
                  <button
                    type="submit"
                    className="admin-category__btn btn btn"
                    onClick={async (e) => {
                      e.preventDefault();
                      await createCategory(state.curTitle);
                      setState({ ...state, inUpdating: false });
                      forceRender();
                    }}
                  >
                    CREATE
                  </button>
                )}
              </div>
            </form>
          )}

          {!state.inUpdating && state.itIsNew && (
            <>
              <h2 className="admin-category__title">{title}</h2>
              <button
                type="button"
                className="admin-category__create-btn"
                onClick={() => setState({ ...state, inUpdating: true })}
              >
                +
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AdminCategory;
