import { useEffect, useState } from "react";
import { auth } from "../../../firebase";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState("");

  useEffect(() => {
    const listen = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  }, []);
  return (
    <div>
      {authUser ? <p>{`Sign in as ${authUser.email}`}</p> : <p>Signed Out</p>}
    </div>
  );
};

export default AuthDetails;
