import { useState } from "react";
import classes from "./ProductItem.module.css";
import AddItem from "./AddItem";
import Ratings from "../catalog/Ratings";
import CartNotification from "./CartNotification";

const ProductItem = (props) => {
  const [show, setShow] = useState(false);

  const showNotify = () => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
      clearTimeout(timer);
    }, 3000);
  };

  return (
    <div className="container pt-5 mb-5">
      <div className={classes["product-container"]}>
        <div className={classes.image}>
          <img src={props.item.image} alt={props.item.name} />
        </div>
        <div className={classes["product-content"]}>
          <h1 className={classes.title}>{props.item.name}</h1>
          <Ratings rating={props.item.rating} reviews={props.item.reviews} />
          <div>
            <p className={classes.price}>
              <span>$</span>
              {props.item.price}
            </p>
          </div>
          <AddItem
            notify={showNotify}
            price={props.item.price}
            itemID={props.id}
            item={props.item}
          />
        </div>
        <CartNotification show={show} />
      </div>
    </div>
  );
};

export default ProductItem;
