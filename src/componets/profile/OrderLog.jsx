import classes from "./OrderLog.module.css";

const OrderLog = (props) => {
  const total = `${(props.qty * props.price).toFixed(2)}`;
  return (
    <li className={classes.log}>
      <div className={classes.image}>
        <img src={props.image} alt={props.name} />
      </div>

      <div className={classes["order-text"]}>
        <h2>{props.name}</h2>
        <div className={classes.info}>
          <p className={classes.qty}>
            Quantity: <span className={classes.qty}>{props.qty}</span>
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
    </li>
  );
};
export default OrderLog;
