import "../pages/Orders.css";

export const OrdersTable = ({ orders, orderDetails }) => {
  const restructuredArray = orderDetails.map((obj) => {
    // Restructure each object individually
    return {
      personId: obj.order.people.personId,
      orderId: obj.order.orderId,
      orderDetailsId: obj.orderDetailsId,
      itemId: obj.item.itemId,
      quantity: obj.quantity,
    };
  });

  const print = () => {
    console.log(restructuredArray);
  };
  return (
    <div className="grid-item-1">
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
                <button onClick={print}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
