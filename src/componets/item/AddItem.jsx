import { useContext, useEffect, useState } from "react";
import UserContext from "../../store/user-context";
import classes from "./AddItem.module.css";

const AddItem = (props) => {
  const [qty, setQty] = useState(0);
  const userCtx = useContext(UserContext);

  const qtyChangeHandler = (event) => {
    setQty(event.target.value);
    if (event.target.value < 0 || event.target.value == "-") {
      setQty(0);
    }
  };

  const raiseQty = () => {
    setQty(qty + 1);
  };

  const lowerQty = () => {
    if (qty <= 0) {
      return;
    }
    setQty(qty - 1);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!qty) {
      return;
    }
    let itemData = {
      qty: qty,
      price: props.price,
      itemID: props.itemID,
      image: props.item.image,
      name: props.item.name,
    };
    userCtx.addItem(itemData, props.itemID);
    props.notify();
    setQty(0);
  };

  return (
    <form onSubmit={onSubmitHandler} className={`${classes.form} mt-auto`}>
      <div>
        <div className={classes["qty-display"]}>
          <input
            type="number"
            value={qty}
            onChange={qtyChangeHandler}
            placeholder="0"
            disabled
          />
        </div>
        <div className={classes.qty}>
          <button
            type="button"
            onClick={raiseQty}
            className={`${classes["qty-button"]} `}
          >
            <p>+</p>
          </button>
          <button
            type="button"
            onClick={lowerQty}
            className={classes["qty-button"]}
          >
            <p>-</p>
          </button>
        </div>
      </div>
      <button type="submit" className={classes.button}>
        Add to Cart
      </button>
    </form>
  );
};

export default AddItem;
