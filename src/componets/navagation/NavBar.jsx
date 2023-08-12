import { useState } from "react";
import classes from "./NavBar.module.css";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";
import ComputerMenu from "./ComputerMenu";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [clicked, setClicked] = useState("");
  const [growing, setGrowing] = useState("");

  const showNavHandler = () => {
    if (showNav) {
      setGrowing("growing");
      const timer = setTimeout(() => {
        setClicked("");
        setGrowing("");
        clearTimeout(timer);
      }, 1);

      const timer2 = setTimeout(() => {
        setShowNav(false);
        clearTimeout(timer2);
      }, 350);
    } else {
      setShowNav(true);
      setGrowing("growing");
      const timer = setTimeout(() => {
        setClicked("clicked");
        setGrowing("");
        clearTimeout(timer);
      }, 1);
    }
  };

  return (
    <nav className={classes.nav}>
      <div className={`container-fluid  h-100 ${classes.navbar}`}>
        <div className={`d-none d-md-flex ${classes.logo}`}>
          <h4>
            {" "}
            <NavLink to="/">
              <span>e</span>Shopping{" "}
            </NavLink>
          </h4>
        </div>
        <SearchBar className={classes["search-bar"]} />
        <div className={`d-none d-md-flex ${classes["nav-items"]}`}>
          <ComputerMenu />
        </div>

        <div className={`d-flex d-md-none ${classes["nav-items"]}`}>
          <button type="button" className={classes["nav-menu"]}>
            <i className={`bi bi-list`} onClick={showNavHandler}></i>
          </button>
        </div>
      </div>
      {showNav && (
        <div className="container-fluid d-md-none m-0 p-0">
          <MobileMenu
            clicked={clicked}
            growing={growing}
            closeMenu={showNavHandler}
          />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
