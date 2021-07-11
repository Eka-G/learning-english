import './login-modal.css';

const LoginModal = () => {
  return (
    <div className="modal-container">
      <div className="modal-overlay">
        <div className="modal">
          <h2 className="modal__title">Please, login</h2>
          <form className="modal__content form">
            <input type="text" className="form__input" placeholder="Login" min="5" max="15" required />
            <input type="text" className="form__input" placeholder="password" min="5" max="15" required />
            <div className="form__btns">
              <button type="button" className="form__cancel-btn btn">
                ⌧ Close
              </button>
              <button type="button" className="btn form__login-btn">
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
