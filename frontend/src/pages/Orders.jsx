import "./Orders.css";
import { OrdersTable } from "../Orders/OrdersTable";
import { OrderDetailsTable } from "../Orders/OrderDetailsTable";

export const Orders = () => {
  return (
    <div className="container">
      <OrdersTable />
      <OrderDetailsTable />
    </div>
  );
};
