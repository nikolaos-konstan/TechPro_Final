import axios from "axios";
import "../People/Modal.css";
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
    console.log(orders.at(-1).orderId);
    await axios.delete(`http://localhost:8080/orders/${orders.at(-1).orderId}`);
    loadOrders();
  };
  return (
    <div>
      <div className="main-container">
        <div className="modal-container">
          <h1>Confirm Exit. This will cancel current order</h1>
          <button
            className="continue-current-order"
            onClick={() => setOpenEdit(false)}
          >
            Continue with the order
          </button>
          <button className="confirm-cancel-order" onClick={deleteOrder}>
            Confirm Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
