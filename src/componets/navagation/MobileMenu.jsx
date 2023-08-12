import classes from "./MobileMenu.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { useContext } from "react";
import UserContext from "../../store/user-context";

const MobileMenu = (props) => {
  const clicked = props.clicked;
  const growing = props.growing;
  const userCtx = useContext(UserContext);
  const [name, setName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setName(user.displayName);
      } else {
        setName("");
      }
    });
  }, [userCtx]);

  const closeMenu = () => {
    props.closeMenu();
  };

  const signOutHandler = () => {
    userCtx.clearUser();
    auth.signOut();
  };
  return (
    <ul
      className={`${classes.menu} ${classes[clicked]} ${classes[growing]}`}
      onTouchEnd={closeMenu}
    >
      <li className={`${classes.logo}`}>
        <h4>
          {" "}
          <NavLink to="/">
            <span>e</span>Shopping{" "}
          </NavLink>
        </h4>
      </li>
      <li className={`${classes.item} mt-4`}>
        <button type="button" className={classes["button-menu"]}>
          <NavLink to="/cart">
            <div className={classes.cart}>
              <i className="bi bi-cart"></i>

              <div className={classes["cart-text"]}>
                {userCtx.cart.length > 0 && <span>{userCtx.cart.length}</span>}
              </div>
            </div>{" "}
            <p className="">Cart</p>
          </NavLink>
        </button>
      </li>
      {!userCtx.loggedIn && (
        <li className={classes.item}>
          <button type="button" className={classes["button-menu"]}>
            <NavLink to="login">
              <div className={classes.cart}>
                <i className="bi bi-person-fill"></i>
                <p className="">Login</p>
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
                <p className="">{name}</p>
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

export default MobileMenu;
