import { createContext } from "react";

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
  order: () => {},
});

export default UserContext;
