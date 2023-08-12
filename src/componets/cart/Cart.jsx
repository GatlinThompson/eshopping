import { useContext, useEffect } from "react";
import UserContext from "../../store/user-context";
import CartItem from "./CartItem";
import NoCartMessage from "./NoCartMessage";

const Cart = () => {
  const userCtx = useContext(UserContext);

  return (
    <main className={"container"}>
      {userCtx.cart.length > 0 && (
        <>
          <ul className={"pt-5 px-0"}>
            {userCtx.cart.map((item) => (
              <CartItem key={item.itemID} item={item} />
            ))}
          </ul>
          <h1>Total: ${userCtx.totalAmount.toFixed(2)}</h1>
        </>
      )}
      {!userCtx.cart.length && <NoCartMessage />}
    </main>
  );
};
export default Cart;
