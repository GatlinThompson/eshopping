import { NavLink } from "react-router-dom";
import classes from "./ComputerMenu.module.css";

const ComputerMenu = () => {
  return (
    <ul className={classes.menu}>
      <li className={classes.item}>
        <button type="button" className={classes["button-menu"]}>
          <NavLink to="/">
            <i className="bi bi-cart"></i>
          </NavLink>
        </button>
        <p className="d-xl-block d-none">Cart</p>
      </li>
      <li className={classes.item}>
        <button type="button" className={classes["button-menu"]}>
          <NavLink to="login">
            <i className="bi bi-person-fill"></i>
          </NavLink>
        </button>
        <p className="d-xl-block d-none">Login</p>
      </li>
      <li className={classes["item-button"]}>
        <button type="button" className={classes["sign-button"]}>
          <NavLink to="/">Sign up</NavLink>
        </button>
      </li>
    </ul>
  );
};

export default ComputerMenu;
