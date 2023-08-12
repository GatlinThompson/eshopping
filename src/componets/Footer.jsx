import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={`container-fluid ${classes["footer-container"]}`}>
        <p>&copy;2023 eShopping Inc. </p>
        <p>Gatlin Thompson</p>
      </div>
    </footer>
  );
};
export default Footer;
