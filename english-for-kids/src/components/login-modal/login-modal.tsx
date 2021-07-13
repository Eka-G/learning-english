import { useHistory } from 'react-router-dom';
import { useStateContext } from '../../shared';
import './login-modal.css';

interface LoginModalProps {
  onClose: () => void;
}

const onInput = (event: React.FormEvent<HTMLInputElement>) => {
  const form: HTMLFormElement | null = document.querySelector('.modal__content');
  const loginBtn: HTMLFormElement | null = document.querySelector('.form__login-btn');

  event.currentTarget.classList.add('form__input--changed');

  if (loginBtn && form) {
    loginBtn.disabled = !form.checkValidity();
  }
};

const LoginModal = ({ onClose }: LoginModalProps) => {
  const history = useHistory();
  const { dispatch } = useStateContext();
  const reg = '^[^~!\\s\\d@#$%*\\(\\)_—+=:;"\'`<>,\\.\\?/\\^\\|][^~!\\s@#$%*\\(\\)_—+=:;"\'`<>,\\.\\?/\\^\\|]+$';

  return (
    <div className="modal-container">
      <div className="modal-overlay">
        <div className="modal">
          <h2 className="modal__title">Please, login</h2>
          <form className="modal__content form">
            <input
              type="text"
              className="form__input"
              placeholder="Login"
              minLength={5}
              maxLength={15}
              pattern={reg}
              onInput={onInput}
              required
            />
            <input
              type="password"
              className="form__input"
              placeholder="password"
              minLength={5}
              maxLength={15}
              onInput={onInput}
              required
            />
            <div className="form__btns">
              <button type="button" className="form__cancel-btn btn" onClick={onClose}>
                ⌧ Close
              </button>
              <button
                type="button"
                className="form__login-btn btn"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  const form: HTMLFormElement | null = document.querySelector('.modal__content');

                  if (form && event.target) {
                    const target = event.currentTarget;
                    target.disabled = !form.checkValidity();
                  }

                  if (form && form.checkValidity()) {
                    history.push('/categories');
                    dispatch({ type: 'login' });
                  }
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
