import classes from "./MobileMenu.module.css";

const MobileMenu = (props) => {
  const clicked = props.clicked;
  const growing = props.growing;
  return (
    <ul className={`${classes.menu} ${classes[clicked]} ${classes[growing]}`}>
      <li>Items</li>
      <li>Items</li>
      <li>Items</li>
    </ul>
  );
};

export default MobileMenu;
