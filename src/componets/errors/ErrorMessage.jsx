import { NavLink } from "react-router-dom";
import classes from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <main className={`container mt-5`}>
      <div className={classes["error-body"]}>
        <h2 className={classes.sorry}>SORRY </h2>
        <p className={classes.context}>we couldn't find that page</p>
        <button type="button" className={classes["error-button"]}>
          <NavLink to="/">Return Home</NavLink>
        </button>
      </div>
    </main>
  );
};

export default ErrorMessage;
