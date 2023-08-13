import { useNavigate } from "react-router-dom";
import ShippingForm from "./ShippingForm";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../store/user-context";
import classes from "./Order.module.css";
import OrderItem from "./OrderItem";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/useHTTPS";

const Order = () => {
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);
  const [isformValid, setFormValid] = useState(false);
  const [placedOrder, setPlacedOrder] = useState(false);
  const [shippingInfo, setShippingInfo] = useState([]);
  const { isLoading, error, sendRequest: sendOrder } = useHttp();

  useEffect(() => {
    if (userCtx.cart.length > 0) {
      return;
    }
    navigate("/");
  }, []);

  const formValid = (valid, data) => {
    setFormValid(valid);
    setShippingInfo(data);
  };

  const sendOrderDB = (shipping, cart, total, user) => {
    const userID = JSON.stringify(user);
    const date = new Date().toDateString();

    sendOrder({
      url: `https://eshoppi-b6671-default-rtdb.firebaseio.com/users/${userID}/orders.json`,
      method: "POST",
      body: { shipping: shipping, cart: cart, total: total, date: date },
    });
  };

  const placeOrder = () => {
    setPlacedOrder(true);

    if (userCtx.loggedIn) {
      sendOrderDB(shippingInfo, userCtx.cart, userCtx.totalAmount, userCtx.id);
    }

    userCtx.order();
  };

  return (
    <main className={classes.main}>
      {!placedOrder && (
        <>
          <ShippingForm valid={formValid} />

          <div className={"container"}>
            <h1 className={classes.title}>Order</h1>
          </div>
          <ul className={`container ${classes.list}`}>
            {userCtx.cart.map((item) => (
              <OrderItem key={item.itemID} item={item} />
            ))}
          </ul>
          <h1 className={`${classes["total-amount"]} container`}>
            <span className={classes.total}>Total:</span>{" "}
            <span className={classes.money}>$</span>
            {userCtx.totalAmount.toFixed(2)}
          </h1>
          <div className={`container ${classes["button-container"]}`}>
            <button
              className={classes.button}
              disabled={!isformValid}
              onClick={placeOrder}
            >
              Place Order
            </button>
          </div>
        </>
      )}
      {placedOrder && (
        <div className={classes["placed-backdrop"]}>
          <div className={classes.order}>
            {isLoading && <h3>Placing Order...</h3>}
            {!isLoading && (
              <>
                <h3>Order Placed</h3>
                <Link to="/">
                  <button type="button" className={classes["button"]}>
                    Return Home
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
};
export default Order;
