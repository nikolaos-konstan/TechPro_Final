import "./Orders.css";
import { OrdersTable } from "../Orders/OrdersTable";
import { OrderDetailsTable } from "../Orders/OrderDetailsTable";

export const Orders = ({ orders, orderDetails }) => {
  return (
    <div className="container-orderspage">
      <OrdersTable orders={orders} />
      <OrderDetailsTable orderDetails={orderDetails} />
    </div>
  );
};
