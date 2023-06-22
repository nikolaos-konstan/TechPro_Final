import { useEffect, useRef, useState } from "react";
import { ColorBox } from "../Items/ColorBox";
import "./PlaceOrder.css";
import axios from "axios";
import { useParams } from "react-router-dom";

export const PlaceOrder = ({ items, orders, loadOrders }) => {
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
  };
  //loadOrders() needs to be outside of useEffect cause it runs once now
  loadOrders();
  return (
    <div>
      <div>
        <h1>Items</h1>

        <div className="box-container">
          {items.map((name) => (
            <div key={name.itemId}>
              <ColorBox name={name.itemName} />
              <button onClick={() => console.log(orders.at(-1))}>
                Add to Order
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
