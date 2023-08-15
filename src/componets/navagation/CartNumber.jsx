import { useContext, useEffect, useState } from "react";
import UserContext from "../../store/user-context";

const CartNumber = () => {
  const userCtx = useContext(UserContext);
  const [cartNumber, setCartNumber] = useState(0);

  const getCartNumber = () => {
    let number = 0;
    for (const index in userCtx.cart) {
      number += userCtx.cart[index].qty;
    }
    setCartNumber(number);
  };
  useEffect(() => {
    getCartNumber();
  }, [userCtx.cart]);

  return <span>{cartNumber}</span>;
};

export default CartNumber;
