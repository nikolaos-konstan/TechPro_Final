import { useState } from "react";
import "./OrderButtons.css";

export const OrderButtons = ({ addProduct }) => {
  //Counter
  const [counter, setCounter] = useState(0);
  const increaseCount = () => {
    setCounter((prev) => prev + 1);
  };

  const decreaseCount = () => {
    setCounter((prev) => prev - 1);
  };
  //End of Counter
  return (
    <div>
      <button onClick={addProduct}>Add to Order</button>
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
