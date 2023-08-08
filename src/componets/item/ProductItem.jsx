import { useState } from "react";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const [qty, setQty] = useState(0);

  return (
    <div className="container my-5">
      <div className={classes["product-container"]}>
        <div className={classes.image}>
          <img src={props.item.image} alt={props.name} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
