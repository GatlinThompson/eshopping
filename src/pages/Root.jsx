import { Outlet } from "react-router-dom";
import NavBar from "../componets/navagation/NavBar";
import { auth } from "../../firebase";
import { useContext, useEffect } from "react";
import UserContext from "../store/user-context";
import Footer from "../componets/Footer";

const RootLayout = () => {
  const userCtx = useContext(UserContext);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        userCtx.login(user.displayName, user.uid);
        userCtx.getCart(user.uid);
      } else {
        userCtx.clearUser();
      }
    });
  }, [auth]);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
