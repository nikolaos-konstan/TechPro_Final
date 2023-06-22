import { useState } from "react";
import "../pages/Orders.css";
import axios from "axios";

import { OrderDetailsTable } from "./OrderDetailsTable";

export const OrdersTable = ({
  orders,
  orderDetails,
  loadOrderDetails,
  loadOrders,
}) => {
  const [filteredArray, setFilteredArray] = useState([]);

  //Filters the Order Details and keeps only the ones that belong to each Order
  const filterByOrderId = (arr, orderId) => {
    setFilteredArray(arr.filter((obj) => obj.order.orderId === orderId));
  };

  //Delete method for OrderDetails **********Needs to find a way to refresh**********
  const deleteOrderDetails = async (arr, id) => {
    await axios.delete(`http://localhost:8080/orderdetails/${id}`);
    loadOrderDetails();
    setFilteredArray(arr.filter((obj) => obj.orderDetailsId !== id));
  };

  //Delete method for Orders
  const deleteOrder = async (id) => {
    await axios.delete(`http://localhost:8080/orders/${id}`);
    loadOrders();
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
              <tr key={order.orderId}>
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
                  <button onClick={() => deleteOrder(order.orderId)}>
                    Delete
                  </button>
                  <button
                    onClick={() => filterByOrderId(orderDetails, order.orderId)}
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
          <OrderDetailsTable
            orderDetails={orderDetails}
            filteredArray={filteredArray}
            deleteOrderDetails={deleteOrderDetails}
          />
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
