import classes from "./LoginErrorMessage.module.css";

const LoginErrorMessage = (props) => {
  return (
    <div className={classes.error}>
      <p>{props.error}</p>
    </div>
  );
};
export default LoginErrorMessage;
