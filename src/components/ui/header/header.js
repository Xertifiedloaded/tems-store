import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./header.module.css";
const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.main}>
          <div className={classes.logo}>
            <h1>Logo</h1>
          </div>
          <nav className={classes.nav}>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/">SHOP</NavLink>
            <NavLink to="/">ABOUT US</NavLink>
            <NavLink to="/">CONTACT US</NavLink>
            <NavLink to="/login">
              <button>login</button>
            </NavLink>
            <div className={classes.cart}>
              <p>cart</p>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
