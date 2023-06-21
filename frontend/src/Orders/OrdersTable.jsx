import { useState } from "react";
import "../pages/Orders.css";
import { OrderDetailsTable } from "./OrderDetailsTable";

export const OrdersTable = ({ orders, orderDetails }) => {
  const [filteredArray, setFilteredArray] = useState([]);
  //Function to reconstruct OrderDetails array
  const restructuredArray = orderDetails.map((obj) => {
    return {
      personId: obj.order.people.personId,
      orderId: obj.order.orderId,
      orderDetailsId: obj.orderDetailsId,
      itemId: obj.item.itemId,
      itemName: obj.item.itemName,
      quantity: obj.quantity,
    };
  });

  const filterByOrderId = (arr, orderId) => {
    setFilteredArray(arr.filter((obj) => obj.orderId === orderId));
  };

  return (
    <div className="container-orderspage">
      <div className="grid-item-ordersTable">
        <table>
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Contact</th>

              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <td>{order.orderId}</td>
                <td>
                  {order.people.firstName +
                    " " +
                    order.people.lastName +
                    " - " +
                    order.people.email}
                </td>
                <td>{order.orderDate}</td>
                <td>
                  <button>Delete</button>
                  <button
                    onClick={() =>
                      filterByOrderId(restructuredArray, order.orderId)
                    }
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid-item-orderDetails">
        {filteredArray.length > 0 ? (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Order Number</th>
                  <th>Item</th>

                  <th>Quantity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredArray.map((orderDetails) => (
                  <tr>
                    <td>{orderDetails.orderDetailsId}</td>
                    <td>{orderDetails.itemName}</td>
                    <td>{orderDetails.quantity}</td>
                    <td>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid-item-orderDetails">
            <h1>No Order Details associated with this order</h1>
          </div>
        )}
        {/* <OrderDetailsTable orderDetails={orderDetails} /> */}
      </div>
    </div>
  );
};
