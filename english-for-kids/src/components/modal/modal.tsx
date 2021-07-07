import './modal.css';

interface ModalProps {
  errors: number;
}

const Modal = ({ errors }: ModalProps) => {
  return (
    <div className="modal-container">
      <div className="modal-overlay">
        <div className="modal">
          <h2 className="modal__title">Game is finished!</h2>
          <div className="modal__content">
            <p>Errors: {errors}</p>

            {errors > 0 && <img className="modal__img" src="./media/fail.png" alt="fail" />}
            {errors === 0 && <img className="modal__img" src="./media/success.png" alt="success" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
