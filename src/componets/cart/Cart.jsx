import { useContext } from "react";
import UserContext from "../../store/user-context";
import CartItem from "./CartItem";
import NoCartMessage from "./NoCartMessage";
import classes from "./Cart.module.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();

  const orderCartHandler = () => {
    navigate("/order");
  };

  return (
    <main className={"container"}>
      {userCtx.cart.length > 0 && (
        <>
          <ul className={"pt-5 px-0"}>
            {userCtx.cart.map((item) => (
              <CartItem key={item.itemID} item={item} />
            ))}
          </ul>
          <div className={classes["cart-total"]}>
            <h1 className={classes["total-amount"]}>
              <span className={classes.total}>Total:</span>{" "}
              <span className={classes.money}>$</span>
              {userCtx.totalAmount.toFixed(2)}
            </h1>
            <button className={classes.button} onClick={orderCartHandler}>
              Order
            </button>
          </div>
        </>
      )}
      {!userCtx.cart.length && <NoCartMessage />}
    </main>
  );
};
export default Cart;
