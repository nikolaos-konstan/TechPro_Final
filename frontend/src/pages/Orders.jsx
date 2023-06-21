import "./Orders.css";
import { OrdersTable } from "../Orders/OrdersTable";
import { OrderDetailsTable } from "../Orders/OrderDetailsTable";

export const Orders = ({ orders, orderDetails }) => {
  return (
    <div>
      <OrdersTable orders={orders} orderDetails={orderDetails} />
    </div>
  );
};
