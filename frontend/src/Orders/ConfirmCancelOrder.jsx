import axios from "axios";
import "../App.css";
import { useNavigate } from "react-router-dom";

export const ConfirmCancelOrder = ({
  setOpenEdit,
  lastOrderId,
  loadOrders,
  orders,
}) => {
  let navigate = useNavigate();
  const deleteOrder = async () => {
    navigate("/");

    await axios.delete(
      `http://${window.location.hostname}:8080/orders/${orders.at(-1).orderId}`
    );
    loadOrders();
  };
  return (
    <div className="overlay">
      <div className="main-modal-container">
        <div className="modal-container">
          <h2>Cancel current order?</h2>
          <button
            className="continue-current-order"
            onClick={() => setOpenEdit(false)}
          >
            No, continue
          </button>
          <button className="cancel-current-order" onClick={deleteOrder}>
            Yes, cancel
          </button>
        </div>
      </div>
    </div>
  );
};
