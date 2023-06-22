import axios from "axios";
import { useState } from "react";

export const EditQuantity = ({
  orderDetails,
  filteredArray,
  deleteOrderDetails,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [counter, setCounter] = useState(0);

  const increaseCount = () => {
    setCounter((prev) => prev + 1);
  };

  const decreaseCount = () => {
    setCounter((prev) => prev - 1);
  };

  const editQuantity = async (id) => {
    await axios.put(`http://localhost:8080/orderdetails/${id}`, {
      quantity: counter,
    });
    setIsEdit((prev) => !prev);
  };

  return (
    <>
      <td>
        {!isEdit ? (
          orderDetails.quantity
        ) : (
          <div>
            <button
              disabled={counter === 0}
              onClick={() => editQuantity(orderDetails.orderDetailsId)}
            >
              Save Changes
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
        )}
      </td>
      <td>
        <button onClick={() => setIsEdit((prev) => !prev)}>
          {isEdit ? "Cancel" : "Edit"}
        </button>
        <button
          onClick={() =>
            deleteOrderDetails(filteredArray, orderDetails.orderDetailsId)
          }
        >
          Delete
        </button>
      </td>
    </>
  );
};
