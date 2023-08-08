import classes from "./Message.module.css";
import { NavLink } from "react-router-dom";

const Message = (props) => {
  let error = false;

  error = props.error;
  return (
    <div className={classes.message}>
      <h3 className="text-center mt-5">{props.message}</h3>
      {error && (
        <div className={classes["button-container"]}>
          <button
            type="button"
            className={`${classes["error-button"]} mx-auto text-center`}
          >
            <NavLink to="/">Return Home</NavLink>
          </button>
        </div>
      )}
    </div>
  );
};

export default Message;
