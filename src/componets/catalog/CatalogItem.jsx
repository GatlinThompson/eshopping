import classes from "./CatalogItem.module.css";
import Ratings from "./Ratings";
import { NavLink } from "react-router-dom";

const CatalogItem = (props) => {
  return (
    <li className={`mx-auto mx-md-0 ${classes["catalog-item"]}`}>
      <div className={classes.image}>
        <img src={props.product.image} alt={props.product.name} />
      </div>
      <div>
        <h4 className={`mt-3 ${classes.title}`}>{props.product.name}</h4>
      </div>
      <Ratings rating={props.product.rating} reviews={props.product.reviews} />
      <h4 className={classes.price}>
        <span>$</span>
        {props.product.price}
      </h4>
      <div className={`mt-auto pt-3 ${classes["button-container"]}`}>
        <button type="button" className={classes.button}>
          <NavLink to={`/item/${props.product.id}`}>Check Out Item</NavLink>
        </button>
      </div>
    </li>
  );
};

export default CatalogItem;
