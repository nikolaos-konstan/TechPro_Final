import "../pages/Orders.css";

export const OrderDetailsTable = ({ orderDetails }) => {
  return (
    <div>
      <div className="grid-item-orderdetails">
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
            {orderDetails.map((orderDetails, index) => (
              <tr>
                <td>{orderDetails.orderDetailsId}</td>
                <td>{orderDetails.item.itemName}</td>
                <td>{orderDetails.quantity}</td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
