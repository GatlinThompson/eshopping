import classes from "./NoCartMessage.module.css";
import { Link } from "react-router-dom";

const NoCartMessage = () => {
  return (
    <div className={`container pt-5`}>
      <div className={classes["body"]}>
        <h1 className={classes.context}>No items currently in cart</h1>
        <button type="button" className={classes.button}>
          <Link to="/">Return Home</Link>
        </button>
      </div>
    </div>
  );
};

export default NoCartMessage;
