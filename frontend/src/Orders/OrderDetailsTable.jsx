import "../App.css";
import { EditQuantity } from "./EditQuantity";

export const OrderDetailsTable = ({
  orderDetails,
  deleteOrderDetails,
  filteredArray,
  loadOrderDetails,
  setFilteredArray,
}) => {
  //State to be able to edit quantity of items in orderDetails

  return (
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
              <td className="td-input-display">
                {orderDetails.orderDetailsId}
              </td>
              <td className="td-input-display">{orderDetails.item.itemName}</td>
              <EditQuantity
                orderDetails={orderDetails}
                filteredArray={filteredArray}
                deleteOrderDetails={deleteOrderDetails}
                loadOrderDetails={loadOrderDetails}
                setFilteredArray={setFilteredArray}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
