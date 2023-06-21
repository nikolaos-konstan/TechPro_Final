import "../pages/Orders.css";
import { OrderDetailsTable } from "./OrderDetailsTable";

export const OrdersTable = ({ orders, orderDetails }) => {
  //Function to reconstruct OrderDetails array
  const restructuredArray = orderDetails.map((obj) => {
    return {
      personId: obj.order.people.personId,
      orderId: obj.order.orderId,
      orderDetailsId: obj.orderDetailsId,
      itemId: obj.item.itemId,
      quantity: obj.quantity,
    };
  });

  const filterByOrderId = (arr, orderId) => {
    console.log(arr);
    const filteredArray = arr.filter((obj) => obj.orderId === orderId);
    console.log(filteredArray);
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
        <OrderDetailsTable orderDetails={orderDetails} />
      </div>
    </div>
  );
};
