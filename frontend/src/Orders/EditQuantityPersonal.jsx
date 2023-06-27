import axios from "axios";
import { useState } from "react";

export const EditQuantityPersonal = ({
  orderDetails,
  filteredDetailsArray,
  deleteOrderDetails,
  loadOrderDetails,
  setFilteredDetailsArray,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [counter, setCounter] = useState(0);

  const increaseCount = () => {
    setCounter((prev) => prev + 1);
  };

  const decreaseCount = () => {
    setCounter((prev) => prev - 1);
  };

  ///Need to find a way to update the quantity change in OrderDetails
  const editQuantity = async (arr, id) => {
    await axios.put(
      `http://${window.location.hostname}:8080/orderdetails/${id}`,
      {
        quantity: counter,
      }
    );
    loadOrderDetails();
    //setFilteredArray(arr.filter((obj) => obj.orderDetailsId !== id));
    setIsEdit((prev) => !prev);
  };

  return (
    <>
      <td className="td-input-display">
        {!isEdit ? (
          orderDetails.quantity
        ) : (
          <div>
            <button
              className="save-changes-button"
              disabled={counter === 0}
              onClick={() =>
                editQuantity(filteredDetailsArray, orderDetails.orderDetailsId)
              }
            >
              Save Changes
            </button>

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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 12H6"
                  />
                </svg>
              </button>
              <div className="counter-display">{counter}</div>
              <button className="counter-operation" onClick={increaseCount}>
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
        )}
      </td>
      <td className="action-column">
        <button
          className="details-button"
          onClick={() => setIsEdit((prev) => !prev)}
        >
          {isEdit ? "Cancel" : "Edit*"}
        </button>
        <button
          className="delete-button"
          onClick={() =>
            deleteOrderDetails(
              filteredDetailsArray,
              orderDetails.orderDetailsId
            )
          }
        >
          Delete
        </button>
      </td>
    </>
  );
};
