import "../App.css";
import { EditQuantity } from "./EditQuantity";

export const OrderDetailsTable = ({
  orderDetails,
  deleteOrderDetails,
  filteredArray,
  loadOrderDetails,
  setFilteredArray,
}) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Order Details #</th>
            <th>Item</th>

            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredArray.map((orderDetails) => (
            <tr key={orderDetails.orderDetailsId}>
              <td className="td-input-display-time">
                {orderDetails.order.people.personId}-
                {orderDetails.order.orderId}-{orderDetails.orderDetailsId}
              </td>
              <td className="td-input-display-time">
                {orderDetails.item.itemName}
                <svg
                  style={{ color: orderDetails.item.itemName }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="tag"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                    clipRule="evenodd"
                  />
                </svg>
              </td>
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
      <p className="Remove Later">
        *Edit works but it doesn't refresh automatically yet, click on the
        Details btn on the table on the left
      </p>
    </div>
  );
};
