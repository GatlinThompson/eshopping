import { useNavigate } from "react-router-dom";
import SignUp from "../componets/auth/SignUp";
import { useEffect } from "react";
import { auth } from "../../firebase";

const SignUpPage = () => {
  return (
    <>
      <SignUp />
    </>
  );
};

export default SignUpPage;
