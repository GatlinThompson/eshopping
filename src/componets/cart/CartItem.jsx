import classes from "./CartItem.module.css";
import UserContext from "../../store/user-context";
import { useContext } from "react";

const CartItem = (props) => {
  const total = `${(props.item.qty * props.item.price).toFixed(2)}`;
  const userCtx = useContext(UserContext);

  const reduceQty = () => {
    const newQty = props.item.qty - 1;
    let itemData = {
      qty: newQty,
      price: props.price,
      itemID: props.item.itemID,
      image: props.item.image,
      name: props.item.name,
    };

    userCtx.lowerItem(itemData);
  };

  const addQty = () => {
    let itemData = {
      qty: 1,
      price: props.price,
      itemID: props.item.itemID,
      image: props.item.image,
      name: props.item.name,
    };
    userCtx.addItem(itemData);
  };

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
              Item Price: <span className={classes.total}> ${total}</span>
            </p>
          </div>
        </div>
      </div>

      <div className={classes["button-container"]}>
        <button className={classes.button} onClick={addQty}>
          <p>+</p>
        </button>

        <button onClick={reduceQty} className={classes.button}>
          <p>-</p>
        </button>
      </div>
    </li>
  );
};

export default CartItem;
