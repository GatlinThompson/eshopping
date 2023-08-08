import classes from "./List.module.css";

const List = (props) => {
  return <ul className={classes.list}>{props.children}</ul>;
};

export default List;
