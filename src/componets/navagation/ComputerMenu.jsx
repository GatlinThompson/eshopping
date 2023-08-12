import { NavLink } from "react-router-dom";
import classes from "./ComputerMenu.module.css";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { useContext } from "react";
import UserContext from "../../store/user-context";

const ComputerMenu = () => {
  const userCtx = useContext(UserContext);
  const [loggedIn, setloggedIn] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setName(userCtx.name);
      } else {
        setName("");
      }
    });
  }, [userCtx]);

  const signOutHandler = () => {
    userCtx.clearUser();
    setloggedIn(userCtx.loggedIn);
    auth.signOut();
  };

  return (
    <ul className={classes.menu}>
      <li className={classes.item}>
        <button type="button" className={classes["button-menu"]}>
          <NavLink to="/cart">
            <div className={classes.cart}>
              <i className="bi bi-cart"></i>
              <div className={classes["cart-text"]}>
                {userCtx.cart.length > 0 && <span>{userCtx.cart.length}</span>}
              </div>
            </div>
          </NavLink>
        </button>
      </li>
      {!userCtx.loggedIn && (
        <li className={classes.item}>
          <button type="button" className={classes["button-menu"]}>
            <NavLink to="login">
              <div className={classes.cart}>
                <i className="bi bi-person-fill"></i>
                <p className="d-xl-block d-none">Login</p>
              </div>
            </NavLink>
          </button>
        </li>
      )}
      {userCtx.loggedIn && (
        <li className={classes.item}>
          <button type="button" className={classes["button-menu"]}>
            <NavLink to="login">
              <div className={classes.cart}>
                <i className="bi bi-person-fill"></i>
                <p className="d-xl-block d-none">{name}</p>
              </div>
            </NavLink>
          </button>
        </li>
      )}
      {!userCtx.loggedIn && (
        <li className={classes["item-button"]}>
          <NavLink to="/signup">
            <button type="button" className={classes["sign-button"]}>
              Sign up
            </button>
          </NavLink>
        </li>
      )}

      {userCtx.loggedIn && (
        <li className={classes["item-button"]}>
          <NavLink to="/">
            <button
              type="button"
              className={classes["sign-button"]}
              onClick={signOutHandler}
            >
              Logout
            </button>
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default ComputerMenu;
