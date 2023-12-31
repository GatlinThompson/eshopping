import { useNavigate } from "react-router-dom";
import Signin from "../componets/auth/Signin";
import { useEffect } from "react";
import { auth } from "../../firebase";
const LoginPage = () => {
  const navigate = useNavigate();

  const returnHome = () => {
    return navigate("..");
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        returnHome();
      }
    });
  }, []);
  return (
    <>
      <Signin />
    </>
  );
};

export default LoginPage;
