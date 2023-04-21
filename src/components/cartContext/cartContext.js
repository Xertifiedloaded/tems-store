import React from "react";
import classes from "./cartContext.module.css";
import { useContext } from "react";
import { UserContext } from "../contextApi/userContextApi";
const CartContext = ({ image, price, title, item, itemsPrice }) => {
  const { removeFromCart, addToCart } = useContext(UserContext);
  return (
    <>
      <div className={classes.main}>
        <div className={classes.cartImg}>
          <img src={image} alt="" />
        </div>
        <h2>{title}</h2>

        <div className={classes.flexCard}>
          <div className={classes.qty}>
            <button onClick={() => addToCart(item)}>
              <i class="fa-solid fa-plus"></i>
            </button>
            <span>
              <h2>{item.qty}</h2>
            </span>
            <button onClick={() => removeFromCart(item)}>
              <i class="fa-solid fa-minus"></i>
            </button>
            <span> ${price}</span>
          </div>
          <h2>{itemsPrice.toFixed(2)}</h2>
        </div>
      </div>
    </>
  );
};

export default CartContext;
