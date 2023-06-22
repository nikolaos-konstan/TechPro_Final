import { useEffect, useRef, useState } from "react";
import { ColorBox } from "../Items/ColorBox";
import "./PlaceOrder.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Counter } from "../Orders/Counter";

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
  //Insert this in every add button, only necessary the first time
  const addProduct = () => {
    setLastOrderId(orders.at(-1).orderId);
    openModal();
  };

  const openModal = () => {
    console.log(lastOrderId);
  };
  //
  //console.log(orders.at[-1]);
  return (
    <div>
      <div>
        <h1>Items</h1>

        <div className="box-container">
          {items.map((name) => (
            <div key={name.itemId}>
              <ColorBox name={name.itemName} />
              <button onClick={addProduct}>Add to Order</button>
              <Counter />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
