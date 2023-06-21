import "./Modal.css";
const Modal = ({ openModal, setOpenModal }) => {
  return (
    <>
      <div className="main-container">
        <div className="modal-container">
          <h1 className="modal-text">Nothing</h1>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quo
            ea cumque voluptate quos quia mollitia expedita, ipsa quibusdam odio
            earum! Beatae autem fugit et eaque quis earum, quasi omnis.
          </div>
        </div>
        <button
          onClick={() => {
            setOpenModal(false);
          }}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default Modal;
