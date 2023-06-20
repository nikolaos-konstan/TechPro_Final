import "./Orders.css";
import { OrdersTable } from "../Orders/OrdersTable";
import { OrderDetailsTable } from "../Orders/OrderDetailsTable";

export const Orders = ({ orders }) => {
  return (
    <div className="container-orderspage">
      <OrdersTable orders={orders} />
      <OrderDetailsTable />
    </div>
  );
};
