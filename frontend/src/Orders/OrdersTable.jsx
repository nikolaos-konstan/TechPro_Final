import { useState } from "react";
import "../pages/Orders.css";
import axios from "axios";

export const OrdersTable = ({
  orders,
  orderDetails,
  loadOrderDetails,
  loadOrders,
}) => {
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

  //Test
  /*
  the output of the transformedData is in this format
  {
  array_orderId1: [2, 3],
  array_orderId2: [4, 5]
}

  */
  const orderAndDetailsArray = orderDetails.map((obj) => {
    return {
      orderId: obj.order.orderId,
      orderDetailsId: obj.orderDetailsId,
    };
  });

  const transformedData = orderAndDetailsArray.reduce((result, obj) => {
    const { orderId, orderDetailsId } = obj;

    if (!result[`array_orderId${orderId}`]) {
      result[`array_orderId${orderId}`] = [orderDetailsId];
    } else {
      result[`array_orderId${orderId}`].push(orderDetailsId);
    }

    return result;
  }, {});

  //console.log(transformedData.array_orderId3);

  //End of Test
  //Delete method for OrderDetails **********Needs to find a way to refresh**********
  const deleteOrderDetails = async (id) => {
    await axios.delete(`http://localhost:8080/orderdetails/${id}`);
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
                  <tr key={orderDetails.orderDetailsId}>
                    <td>{orderDetails.orderDetailsId}</td>
                    <td>{orderDetails.itemName}</td>
                    <td>{orderDetails.quantity}</td>
                    <td>
                      <button>Edit</button>
                      <button
                        onClick={() =>
                          deleteOrderDetails(orderDetails.orderDetailsId)
                        }
                      >
                        Delete
                      </button>
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
