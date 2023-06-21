import "./Orders.css";
import { OrdersTable } from "../Orders/OrdersTable";
import { OrderDetailsTable } from "../Orders/OrderDetailsTable";

export const Orders = ({
  orders,
  orderDetails,
  loadOrderDetails,
  loadOrders,
}) => {
  return (
    <div>
      <OrdersTable
        orders={orders}
        orderDetails={orderDetails}
        loadOrderDetails={loadOrderDetails}
        loadOrders={loadOrders}
      />
    </div>
  );
};
