import { useContext, useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { Link, useNavigate } from "react-router-dom";
import LoginErrorMessage from "./LoginErrorMessage";
import classes from "./Form.module.css";
import UserContext from "../../store/user-context";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setLoginError(false);
        userCtx.clearUser();
        userCtx.login(userCredential.user.displayName, userCredential.user.uid);
        navigate("..");
      })
      .catch((error) => {
        setLoginError(true);

        setErrorMessage(error.message);
      });
  };

  return (
    <main className="container">
      <form onSubmit={login} className={classes.form}>
        <h1>Log in</h1>{" "}
        {loginError && <LoginErrorMessage error={errorMessage} />}
        <div className={classes["form-control"]}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={emailChangeHandler}
            required
          />
        </div>
        <div className={classes["form-control"]}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={passwordChangeHandler}
            required
          />
        </div>
        <div className={classes["form-control"]}>
          <button type="submit" className={classes["button"]}>
            Login
          </button>
          <button type="button" className={classes.link}>
            <Link to="/signup">New User? Sign up Here</Link>
          </button>
        </div>
      </form>
    </main>
  );
};

export default Signin;
