import { useHistory } from 'react-router-dom';
import { useStateContext } from '../../shared';
import './login-modal.css';

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal = ({ onClose }: LoginModalProps) => {
  const history = useHistory();
  const { dispatch } = useStateContext();

  return (
    <div className="modal-container">
      <div className="modal-overlay">
        <div className="modal">
          <h2 className="modal__title">Please, login</h2>
          <form className="modal__content form">
            <input type="text" className="form__input" placeholder="Login" min="5" max="15" required />
            <input type="text" className="form__input" placeholder="password" min="5" max="15" required />
            <div className="form__btns">
              <button type="button" className="form__cancel-btn btn" onClick={onClose}>
                ⌧ Close
              </button>
              <button
                type="button"
                className="form__login-btn btn"
                onClick={() => {
                  history.push('/categories');
                  dispatch({ type: 'login' });
                }}
              >
                ✓ Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
