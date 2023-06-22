import { useState } from "react";
import "./OrderButtons.css";

export const OrderButtons = ({ addProduct, orders, setLastOrderId }) => {
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
