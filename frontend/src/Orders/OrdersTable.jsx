import "../pages/Orders.css";

export const OrdersTable = ({ orders }) => {
  return (
    <div className="grid-item-1">
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
            <th>Orders</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr>
              <td key={order.orderId}>{index + 1}</td>
              <td>{order.ordeerId}</td>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
