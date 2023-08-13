import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.icon}>
        <i className="bi bi-person-circle"></i>
      </div>
      <h1>Profile</h1>
    </div>
  );
};
export default Header;
