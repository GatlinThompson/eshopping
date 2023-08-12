import { useNavigate } from "react-router-dom";
import SignUp from "../componets/auth/SignUp";
import { useEffect } from "react";
import { auth } from "../../firebase";

const SignUpPage = () => {
  const navigate = useNavigate();
  const returnHome = () => {
    return navigate("..");
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        //returnHome();
      }
    });
  }, []);

  return (
    <>
      <SignUp />
    </>
  );
};

export default SignUpPage;
