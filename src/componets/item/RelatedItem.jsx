import { NavLink } from "react-router-dom";
import classes from "./RelatedItem.module.css";
import Ratings from "../catalog/Ratings";

const RelatedItem = (props) => {
  return (
    <li className={classes.list}>
      <NavLink to={`/item/${props.item.id}`}>
        <div className={classes.body}>
          <div className={classes.image}>
            <img src={props.item.image} alt={props.item.name} />
          </div>
          <p className={`${classes.name}`}>{props.item.name}</p>
          <Ratings
            rating={props.item.rating}
            reviews={props.item.reviews}
            size={"small"}
          />
          <p className={classes.price}>
            <span>$</span>
            {props.item.price}
          </p>
        </div>
      </NavLink>
    </li>
  );
};

export default RelatedItem;
