import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import CatalogPage from "./pages/Catalog";
import ErrorPage from "./pages/Error";
import ItemPage from "./pages/Item";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import CartPage from "./pages/Cart";
import { useContext, useEffect } from "react";
import UserContext from "./store/user-context";
import { auth } from "../firebase";

import UserProvider from "./store/UserProvider";
import OrderPage from "./pages/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "home",
    children: [
      { index: true, element: <HomePage /> },
      { path: "catalog", element: <CatalogPage /> },
      { path: "catalog/:itemName", element: <CatalogPage /> },
      { path: "item", element: <ItemPage /> },
      { path: "item/:itemName", element: <ItemPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "order", element: <OrderPage /> },
    ],
  },
]);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
