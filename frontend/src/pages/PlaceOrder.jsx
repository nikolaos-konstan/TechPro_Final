import { useEffect, useRef, useState } from "react";
import { ColorBox } from "../Items/ColorBox";
import "../App.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { OrderButtons } from "../Orders/OrderButtons";
import { ConfirmCancelOrder } from "../Orders/ConfirmCancelOrder";

export const PlaceOrder = ({ items, orders, loadOrders, loadOrderDetails }) => {
  //Use useRef to bypass the second mount of React due to Strict Mode in useEffect//
  const effectRan = useRef(false);
  const { id } = useParams();
  const order = { people: { personId: Number(id) } };
  //Open Modal Warning
  const [openEdit, setOpenEdit] = useState(false);

  useEffect(() => {
    if (effectRan.current === false) {
      postOrder();

      return () => (effectRan.current = true);
    }
  }, []);

  const postOrder = async () => {
    await axios.post(`http://${window.location.hostname}:8080/orders`, order);
    loadOrders();
  };

  const cancelOrder = () => {
    openModal();
  };

  const openModal = () => {
    setOpenEdit(true);
  };

  return (
    <div>
      <div className="place-order-grid-container">
        <h1 className="place-order-grid-title">
          Select items to add to the order
        </h1>

        <div className="box-container place-order">
          {items.map((name) => (
            <div key={name.itemId}>
              <ColorBox name={name.itemName} />
              <OrderButtons
                orders={orders}
                id={id}
                itemId={name.itemId}
                loadOrderDetails={loadOrderDetails}
              />
            </div>
          ))}
        </div>
        <div className="place-order-all-buttons">
          <div className="place-order-grid-buttons">
            <button className="cancel-order-button" onClick={cancelOrder}>
              Cancel
            </button>
            <Link to="/">
              <button className="cancel-order-button">Confirm</button>
            </Link>
          </div>
          {openEdit && (
            <ConfirmCancelOrder
              setOpenEdit={setOpenEdit}
              loadOrders={loadOrders}
              orders={orders}
            />
          )}
        </div>
      </div>
    </div>
  );
};
