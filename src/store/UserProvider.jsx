import UserContext from "./user-context";
import { useEffect, useReducer } from "react";
import useHttp from "../hooks/useHTTPS";

const defaultUserState = {
  loggedIn: false,
  cart: [],
  totalAmount: 0,
  name: "",
  id: "",
};

const userReducer = (state, action) => {
  //CLEAR USER DATA
  if (action.type === "CLEAR") {
    return defaultUserState;
  }
  //ADD ITEM
  if (action.type == "ADD") {
    const existingCartItemIndex = state.cart.findIndex(
      (item) => item.itemID == action.item.itemID
    );

    const extistingCartItem = state.cart[existingCartItemIndex];

    let updatedItems;

    if (extistingCartItem) {
      const updatedItem = {
        ...extistingCartItem,
        qty: extistingCartItem.qty + action.item.qty,
      };

      updatedItems = [...state.cart];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.cart.concat(action.item);
    }
    //TotalAmount
    let total = 0;

    for (const index in updatedItems) {
      let itemTotal = updatedItems[index].price * updatedItems[index].qty;
      total += itemTotal;
    }

    return {
      ...state,
      cart: updatedItems,
      totalAmount: total,
    };
  }

  //LOWER ITEM
  if (action.type == "SUBSTRACT") {
    const itemIndex = state.cart.findIndex(
      (item) => item.itemID == action.item.itemID
    );

    let updatedItems;

    const extistingCartItem = state.cart[itemIndex];

    const updatedItem = {
      ...extistingCartItem,
      qty: action.item.qty,
    };

    updatedItems = [...state.cart];

    updatedItems[itemIndex] = updatedItem;
    const reducedItems = updatedItems.filter((item) => item.qty > 0);

    //TotalAmount
    let total = 0;

    for (const index in updatedItems) {
      let itemTotal = updatedItems[index].price * updatedItems[index].qty;
      total += itemTotal;
    }

    return { ...state, cart: reducedItems, totalAmount: total };
  }

  //SETUP CART
  if (action.type == "SETCART") {
    return {
      ...state,
      cart: action.item,
    };
  }

  if (action.type == "SETTOTAL") {
    let total = 0;
    for (const index in action.item) {
      let itemTotal = action.item[index].price * action.item[index].qty;
      total += itemTotal;
    }
    return {
      ...state,
      totalAmount: total,
    };
  }

  //USER LOGIN
  if (action.type == "LOGIN") {
    let name = action.name;
    if (action.name.length > 8) {
      let shortName = action.name.slice(0, 8);
      shortName = shortName + "...";
      name = shortName;
    }
    return {
      ...state,
      loggedIn: true,
      name: name,
      id: action.id,
    };
  }

  //USER ORDERED
  if ((action.type = "ORDER")) {
    return {
      ...state,
      cart: [],
      totalAmount: 0,
    };
  }

  return defaultUserState;
};

const UserProvider = (props) => {
  const { isLoading, error, sendRequest: updateCart } = useHttp();
  const { isLoading2, error1, sendRequest: fetchCart } = useHttp();

  const [userState, dispatchUserAction] = useReducer(
    userReducer,
    defaultUserState
  );

  const clearUserHandler = () => {
    dispatchUserAction({ type: "CLEAR" });
  };

  const addItemToCartHandler = (item) => {
    dispatchUserAction({ type: "ADD", item: item });
  };

  const lowerItemToCartHandler = (item) => {
    dispatchUserAction({ type: "SUBSTRACT", item: item });
  };

  const getLoggedInHandler = (name, id) => {
    dispatchUserAction({ type: "LOGIN", name: name, id: id });
  };

  const orderCartHandler = () => {
    dispatchUserAction({ type: "ORDER" });
  };

  const getCartHandler = (id) => {
    const userID = JSON.stringify(id);

    const transformCart = (cartObj) => {
      const loadedCart = [];

      for (const key in cartObj) {
        loadedCart.push({
          name: cartObj[key].name,
          itemID: cartObj[key].itemID,
          price: cartObj[key].price,
          qty: cartObj[key].qty,
          image: cartObj[key].image,
        });
      }
      dispatchUserAction({ type: "SETCART", item: loadedCart });
      dispatchUserAction({ type: "SETTOTAL", item: loadedCart });
    };

    fetchCart(
      {
        url: `https://eshoppi-b6671-default-rtdb.firebaseio.com/users/${userID}/cart.json`,
      },
      transformCart
    );
  };

  const userContext = {
    loggedIn: userState.loggedIn,
    cart: userState.cart,
    totalAmount: userState.totalAmount,
    name: userState.name,
    id: userState.id,
    clearUser: clearUserHandler,
    addItem: addItemToCartHandler,
    lowerItem: lowerItemToCartHandler,
    login: getLoggedInHandler,
    getCart: getCartHandler,
    order: orderCartHandler,
  };

  const updateDBCart = async (user) => {
    const userID = JSON.stringify(user);
    updateCart({
      url: `https://eshoppi-b6671-default-rtdb.firebaseio.com/users/${userID}.json`,
      method: "PATCH",
      body: { cart: userContext.cart },
    });
  };

  useEffect(() => {
    if (!userContext.loggedIn) {
      return;
    }

    updateDBCart(userContext.id);
  }, [userContext.cart]);

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
