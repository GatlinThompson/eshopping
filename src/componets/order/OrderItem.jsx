import classes from "./OrderItem.module.css";

const OrderItem = (props) => {
  const total = `${(props.item.qty * props.item.price).toFixed(2)}`;
  return (
    <li className={classes["cart-container"]}>
      <div className={classes["cart-content"]}>
        <div className={classes.image}>
          <img src={props.item.image} alt={props.item.name} />
        </div>
        <div className={classes["cart-text"]}>
          <h2>{props.item.name}</h2>
          <div className={classes.info}>
            <p className={classes.qty}>
              Quantity: <span className={classes.qty}>{props.item.qty}</span>
            </p>
            <p>
              Item Price:{" "}
              <span className={classes.total}>
                <span className={classes["item-money"]}>$</span>
                {total}
              </span>
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default OrderItem;
