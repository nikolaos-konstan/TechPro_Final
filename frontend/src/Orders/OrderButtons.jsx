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
  const [buttonMessage, setButtonMessage] = useState("Add Item");
  const [className, setClassName] = useState("add-btn");
  const increaseCount = () => {
    setCounter((prev) => prev + 1);
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
    setClassName("added-btn");
    postOrderDetails(orderDetails);
  };
  //creates orderDetails
  const postOrderDetails = async (orderDetails) => {
    await axios.post(
      `http://${window.location.hostname}:8080/orderdetails`,
      orderDetails
    );
    loadOrderDetails();
    setIsDisabled(true);
    setCounter(0);
    setButtonMessage("Item Added!");
  };
  return (
    <div>
      <button
        className={className}
        onClick={addProduct}
        disabled={counter === 0 || isDisabled}
      >
        {buttonMessage}
      </button>
      <div>
        <div className="counter-container">
          <button
            className="counter-operation"
            disabled={counter === 0}
            onClick={decreaseCount}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="plus-operator"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </button>
          <div className="counter-display">{counter}</div>
          <button
            className="counter-operation"
            onClick={increaseCount}
            disabled={isDisabled}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="plus-operator"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
