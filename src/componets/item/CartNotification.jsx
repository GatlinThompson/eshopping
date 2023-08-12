import { useEffect, useState } from "react";
import classes from "./CartNotification.module.css";

const CartNotification = (props) => {
  const [showing, setShowing] = useState(null);
  useEffect(() => {
    if (!props.show) {
      setShowing();
      return;
    }
    setShowing(classes.showing);
    const timer = setTimeout(() => {
      setShowing(null);
      clearTimeout(timer);
    }, 2600);
  }, [props.show]);
  return (
    <>
      {props.show && (
        <div className={`${classes.notify} ${showing}`}>
          <p>Items added to cart.</p>
        </div>
      )}
    </>
  );
};

export default CartNotification;
