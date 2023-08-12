import { useState, useEffect } from "react";
import { auth } from "../../../firebase";
import { useContext } from "react";
import UserContext from "../../store/user-context";
import { Link, useNavigate } from "react-router-dom";
import useHttp from "../../hooks/useHTTPS";
import classes from "./Form.module.css";
import LoginErrorMessage from "./LoginErrorMessage";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signupError, setSignupError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [firstNameValid, setFirstNameValid] = useState(false);
  const [lastNameValid, setLastNameValid] = useState(false);
  const navigate = useNavigate();
  const { isLoading, error, sendRequest: sendNewUser } = useHttp();
  const userCtx = useContext(UserContext);

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value.trim());
    if (event.target.value.trim().length > 0) {
      setFirstNameValid(true);
    } else {
      setFirstNameValid(false);
    }
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
    if (event.target.value.trim().length > 0) {
      setLastNameValid(true);
    } else {
      setLastNameValid(false);
    }
  };

  const setUpNewUserDB = async (userID) => {
    console.log("In db put");
    console.log(userID);
    sendNewUser({
      url: `https://eshoppi-b6671-default-rtdb.firebaseio.com/users/${userID}.json`,
      method: "PUT",
      body: { firstName: firstName, lastName: lastName },
    });
  };

  const signup = (event) => {
    event.preventDefault();
    setErrorMessage("");
    if (!firstNameValid || !lastNameValid) {
      const message = "Name feilds cannot be empty";
      setErrorMessage(message);
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        console.log(userCredential);
        console.log(auth);
        const user = userCredential.user;

        await user.updateProfile({ displayName: firstName });

        userCredential.user.updateProfile({
          displayName: firstName,
        });
        console.log("IUN SIGN UP");
        console.log(firstName);

        console.log("signup name: " + UserContext.name);
        console.log(userCredential.user.uid);
        const userID = JSON.stringify(userCredential.user.uid);
        setSignupError(false);
        setUpNewUserDB(userID);
        setFirstName("");
        setLastName("");
        userCtx.clearUser();
        auth.signOut();
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        setSignupError(true);
        setErrorMessage(error.message);
      });
    setPassword("");
  };

  return (
    <main className="container">
      <form onSubmit={signup} className={classes.form}>
        <h1>Sign up</h1>
        {signupError && <LoginErrorMessage error={errorMessage} />}
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
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={firstNameChangeHandler}
          />
        </div>
        <div className={classes["form-control"]}>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={lastNameChangeHandler}
          />
        </div>
        <div>
          <button type="submit" className={classes["button"]}>
            Sign up
          </button>
          <button type="button" className={classes.link}>
            <Link to="/login">Already a User? Log in In Here</Link>
          </button>
        </div>
      </form>
    </main>
  );
};

export default SignUp;
