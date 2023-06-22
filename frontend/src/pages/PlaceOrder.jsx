import { useEffect, useRef, useState } from "react";
import { ColorBox } from "../Items/ColorBox";
import "./PlaceOrder.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { OrderButtons } from "../Orders/OrderButtons";

export const PlaceOrder = ({ items, orders, loadOrders }) => {
  const [lastOrderId, setLastOrderId] = useState(0);
  //Use useRef to bypass the second mount of React due to Strict Mode//
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

  const addProduct = () => {
    console.log(lastOrderId);
  };

  return (
    <div>
      <div>
        <h1>Items</h1>

        <div className="box-container">
          {items.map((name) => (
            <div key={name.itemId}>
              <ColorBox name={name.itemName} />
              <OrderButtons
                setLastOrderId={setLastOrderId}
                addProduct={addProduct}
                orders={orders}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
