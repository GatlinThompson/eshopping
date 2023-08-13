import OrderReceipt from "./OrderReceipt";
import classes from "./Orders.module.css";

const Orders = (props) => {
  return (
    <div className={classes.orders}>
      <h3 className={classes.title}>Recent Orders</h3>
      {!props.orders.length > 0 && (
        <h2 className={classes["no-orders"]}>No Recent Orders</h2>
      )}
      {props.orders.map((order) => (
        <OrderReceipt
          key={order.id}
          total={order.total}
          date={order.date}
          cart={order.cart}
        />
      ))}
    </div>
  );
};

export default Orders;
