import classes from "./User.module.css";

const UserInfo = (props) => {
  return (
    <div className={classes.user}>
      <h2 className={classes.name}>
        Name:
        <span>
          {props.info.firstName} {props.info.lastName}
        </span>
      </h2>
      <h2 className={classes.email}>
        Email: <span>{props.info.email}</span>
      </h2>
    </div>
  );
};

export default UserInfo;
