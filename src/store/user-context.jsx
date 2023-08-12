import { createContext, useEffect } from "react";
//import useHttp from "../hooks/useHTTPS";
//const defaultUserState = {
//  loggedIn: false,
//  cart: [],
//  totalAmount: 0,
//  name: "",
//  id: "",
//  clearUser: () => {
//    clearUserHandler();
//  },
//  addItem: (item, id) => {
//    addUserItem(item, id);
//  },
//};
////CLEAR USER
//const clearUserHandler = () => {
//  UserContext == defaultUserState;
//};
//
////ADD ITEM
//const addUserItem = (item, id) => {
//  const existingItem = UserContext.cart.filter((ID) => ID.itemID == id);
//  let index = 0;
//  for (const key in UserContext.cart) {
//    if (id === UserContext.cart[key].itemID) index = key;
//  }
//
//  console.log("INDEX: " + index);
//  console.log("NEW ITEM");
//  console.log(item);
//  console.log("EXISTING ITEM");
//  console.log(existingItem);
//
//  if (!existingItem.length) {
//    UserContext.cart = [...UserContext.cart, item];
//  } else {
//    const changeQty = item.qty;
//    const oldQty = existingItem[0].qty;
//    console.log("OLD QTY: " + oldQty);
//    console.log("NEW QTY: " + changeQty);
//    const newQty = oldQty + changeQty;
//    const price = existingItem[0].price;
//    const total = newQty * price;
//    const updatedItem = {
//      qty: newQty,
//      price: existingItem[0].price,
//      itemID: existingItem[0].itemID,
//      totol: total,
//    };
//    console.log("NEW ITEM FULL");
//    console.log(updatedItem);
//    UserContext.cart[index] = updatedItem;
//  }
//
//  console.log("CART");
//  console.log(UserContext.cart);
//};

//const UserContext = createContext({
//  loggedIn: false,
//  cart: [],
//  totalAmount: 0,
//  name: "",
//  clearUser: () => {},
//  addItem: (item, id) => {
//    console.log(item);
//  },
//});

//const UserContext = {
//  loggedIn: false,
//  cart: [],
//  totalAmount: 0,
//  name: "",
//  id: "",
//  clearUser: () => {},
//  addItem: (item, id) => {},
//};
//
//const UserData = () => {
//  useEffect(() => {});
//
//  //ADD ITEM
//  const addUserItem = (item, id) => {
//    const existingItem = UserContext.cart.filter((ID) => ID.itemID == id);
//    let index = 0;
//    for (const key in UserContext.cart) {
//      if (id === UserContext.cart[key].itemID) index = key;
//    }
//
//    console.log("INDEX: " + index);
//    console.log("NEW ITEM");
//    console.log(item);
//    console.log("EXISTING ITEM");
//    console.log(existingItem);
//
//    if (!existingItem.length) {
//      UserContext.cart = [...UserContext.cart, item];
//    } else {
//      const changeQty = item.qty;
//      const oldQty = existingItem[0].qty;
//      console.log("OLD QTY: " + oldQty);
//      console.log("NEW QTY: " + changeQty);
//      const newQty = oldQty + changeQty;
//      const price = existingItem[0].price;
//      const total = newQty * price;
//      const updatedItem = {
//        qty: newQty,
//        price: existingItem[0].price,
//        itemID: existingItem[0].itemID,
//        totol: total,
//      };
//      console.log("NEW ITEM FULL");
//      console.log(updatedItem);
//      UserContext.cart[index] = updatedItem;
//    }
//
//    console.log("CART");
//    console.log(UserContext.cart);
//  };
//
//  return UserContext;
//};

const UserContext = createContext({
  loggedIn: false,
  cart: [],
  totalAmount: 0,
  name: "",
  id: "",
  clearUser: () => {},
  addItem: (item) => {},
  lowerItem: (item) => {},
  login: (name, id) => {},
  getCart: (id) => {},
});

export default UserContext;
