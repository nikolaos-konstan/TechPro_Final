import { useState } from "react";
import "../App.css";
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
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonMessage, setButtonMessage] = useState("Add to order");
  const increaseCount = () => {
    setCounter((prev) => prev + 1);
    console.log(orders.at(-1).orderId);
  };

  const decreaseCount = () => {
    setCounter((prev) => prev - 1);
  };
  //End of Counter

  const addProduct = () => {
    const orderDetails = {
      order: {
        orderId: Number(orders.at(-1).orderId),
      },
      item: { itemId: Number(itemId) },
      quantity: counter,
    };
    postOrderDetails(orderDetails);
  };

  const postOrderDetails = async (orderDetails) => {
    await axios.post("http://localhost:8080/orderdetails", orderDetails);
    loadOrderDetails();
    setIsDisabled(true);
    setCounter(0);
    setButtonMessage("Item Added!");
  };
  return (
    <div>
      <button onClick={addProduct} disabled={counter === 0 || isDisabled}>
        {buttonMessage}
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
          <button
            className="counter-operation"
            onClick={increaseCount}
            disabled={isDisabled}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
