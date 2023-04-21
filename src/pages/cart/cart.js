import React, { useContext } from "react";
import { UserContext } from "../../components/contextApi/userContextApi";
import CartContext from "../../components/cartContext/cartContext";
import classes from "./cart.module.css";
import FormInfo from "../../components/form/form";
const Cart = () => {
  const { cart, clearCart } = useContext(UserContext);
  const itemsPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
  const BankCharges = 20;
  const Delivery = "";
  const totalPrice = parseFloat(itemsPrice + BankCharges + Delivery);
  return (
    <>
      <div className={classes.sideMirror}>
        <div>
          {cart.length === 0 ? (
            <div>
              <p>cart is empty</p>
            </div>
          ) : (
            <div>
              <p className={classes.clearIcon} onClick={clearCart}>
                <i class="fa-solid fa-trash fa-beat-fade trashBin"></i>
              </p>
              {cart.map((item, i) => (
                <div>
                  <CartContext
                    itemsPrice={itemsPrice}
                    item={item}
                    {...item}
                    key={i}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <FormInfo />
        </div>
        <div className={classes.OrderDetails}>
          <div className={classes.total}>
            <div> Delivery fee</div>
            <div>{Delivery}</div>
          </div>
          <div className={classes.total}>
            <div> Bank Charges</div>
            <div>
              &#8358;
              {BankCharges.toFixed(2)}
            </div>
          </div>
          <div className={classes.total}>
            <h4> Total price</h4>
            <h2> &#8358; {totalPrice.toFixed(2)}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
