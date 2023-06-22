import { useState } from "react";
import "./OrderButtons.css";
import axios from "axios";

export const OrderButtons = ({
  lastOrderId,
  orders,
  setLastOrderId,
  id,
  itemId,
  loadOrderDetails,
}) => {
  //Counter
  const [counter, setCounter] = useState(0);
  const increaseCount = () => {
    setCounter((prev) => prev + 1);
    //Insert this in every add button, only necessary the first time in order to setLastOrderId
    setLastOrderId(orders.at(-1).orderId);
  };

  const decreaseCount = () => {
    setCounter((prev) => prev - 1);
  };
  //End of Counter

  const addProduct = () => {
    console.log(lastOrderId);
    console.log(itemId);
    const orderDetails = {
      order: {
        orderId: Number(lastOrderId),
      },
      item: { itemId: Number(itemId) },
      quantity: counter,
    };
    console.log(orderDetails);
    postOrderDetails(orderDetails);
  };

  const postOrderDetails = async (orderDetails) => {
    await axios.post("http://localhost:8080/orderdetails", orderDetails);
    loadOrderDetails();
  };
  return (
    <div>
      <button onClick={addProduct} disabled={counter === 0}>
        Add to Order
      </button>
      <div>
        <div className="counter-container">
          <button
            className="counter-operation"
            disabled={counter === 0}
            onClick={decreaseCount}
          >
            -
          </button>
          <div className="counter-display">{counter}</div>
          <button className="counter-operation" onClick={increaseCount}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};
