import { Outlet } from "react-router-dom";
import NavBar from "../componets/navagation/NavBar";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default RootLayout;
