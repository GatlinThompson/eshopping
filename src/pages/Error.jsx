import { useRouteError } from "react-router-dom";
import NavBar from "../componets/navagation/NavBar";
import ErrorMessage from "../componets/errors/ErrorMessage";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <ErrorMessage />
    </>
  );
};

export default ErrorPage;
