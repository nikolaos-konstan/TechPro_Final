import { useEffect, useRef, useState } from "react";
import { ColorBox } from "../Items/ColorBox";
import "./PlaceOrder.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { OrderButtons } from "../Orders/OrderButtons";

export const PlaceOrder = ({ items, orders, loadOrders, loadOrderDetails }) => {
  const [lastOrderId, setLastOrderId] = useState(0);
  //Use useRef to bypass the second mount of React due to Strict Mode in useEffect//
  const effectRan = useRef(false);
  const { id } = useParams();
  const order = { people: { personId: Number(id) } };

  useEffect(() => {
    if (effectRan.current === false) {
      postOrder();

      return () => (effectRan.current = true);
    }
  }, []);

  const postOrder = async () => {
    await axios.post("http://localhost:8080/orders", order);
    loadOrders();
  };

  return (
    <div>
      <div className="place-order-grid-container">
        <h1 className="place-order-grid-title">Items</h1>

        <div className="box-container place-order">
          {items.map((name) => (
            <div key={name.itemId}>
              <ColorBox name={name.itemName} />
              <OrderButtons
                setLastOrderId={setLastOrderId}
                orders={orders}
                lastOrderId={lastOrderId}
                id={id}
                itemId={name.itemId}
                loadOrderDetails={loadOrderDetails}
              />
            </div>
          ))}
        </div>
        <div className="place-order-grid-buttons">
          <button>Cancel</button>
          <button>Confirm</button>
        </div>
      </div>
    </div>
  );
};
