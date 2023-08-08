import { useState } from "react";
import classes from "./SearchBar.module.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [item, setItem] = useState("");
  const navigate = useNavigate();

  const onItemSearchHandler = (event) => {
    setItem(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (item.trim().length === 0) {
      return navigate(".");
    }
    navigate("/catalog/" + item.trim());
    setItem("");
  };
  return (
    <form onSubmit={onSubmitHandler} className={classes["search-bar"]}>
      <div className={classes.search}>
        <input
          type="text"
          placeholder="Search for an item"
          onChange={onItemSearchHandler}
          value={item}
        />
      </div>
      <div>
        <button type="submit">
          <i className="bi bi-search"></i>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
