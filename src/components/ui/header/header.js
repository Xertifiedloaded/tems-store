import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./header.module.css";
import { UserContext } from "../../contextApi/userContextApi";
import Cart from "../../../pages/cart/cart";
import sideBarContent from "../../../assets/images/logo.svg";
const Header = () => {
  const { open, SetisOpen, handleClose, cart } = useContext(UserContext);
  const [active, setActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  });
  return (
    <>
      <header
        className={`${active ? classes.open : classes.close} && ${
          classes.header
        } `}
      >
        <div className={classes.main}>
          <div className={classes.logo}>logo</div>
          <div className={classes.side}>
            <i
              onClick={handleClose}
              class="fa-solid fa-cart-shopping cartIcon"
            ></i>
            <span>{cart.length === 0 ? "" : cart.length}</span>
          </div>
          {open && (
            <div className={classes.sidebar}>
              <div className={classes.shoppingCart}>
                <div className={classes.cartList}>
                  shopping bag({cart.length === 0 ? 0 : cart.length})
                </div>
                <i onClick={handleClose} class="fa-solid fa-arrow-right"></i>
              </div>
              <div className={classes.myCart}>
                <Cart />
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
