import classes from "./OrderReceipt.module.css";
import OrderLog from "./OrderLog";
const OrderReceipt = (props) => {
  return (
    <div className={classes["order-container"]}>
      <h4 className={classes.date}>{props.date}</h4>
      <ul className={classes["order-log"]}>
        {props.cart.map((item) => (
          <OrderLog
            key={item.itemID}
            price={item.price}
            image={item.image}
            qty={item.qty}
            name={item.name}
          />
        ))}
      </ul>
      <h3 className={classes.total}>
        Total:
        <span>
          <span>$</span>
          {props.total.toFixed(2)}
        </span>
      </h3>
    </div>
  );
};

export default OrderReceipt;
