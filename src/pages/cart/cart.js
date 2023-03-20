import React from 'react'
import { userContent } from '../../mainLayout/mainLayout'
import { useContext } from 'react'
import classes from './cart.module.css'
const Cart = () => {
    const { cartItems, handleRemoveProduct, handleAddProduct, handleClearCart } = useContext(userContent)
    const totalPrice = cartItems.reduce((price, items) => price + items.quantity * items.price, 0)
    return (

        <div className={classes.main}>

            <div>
                <h2> cart items</h2>
            </div>
            <div className='clear-cart'>
                {cartItems.length >= 1 && (
                    <button onClick={handleClearCart}>
                        clear
                    </button>
                )}
            </div>
            {cartItems.length === 0 && (
                <div>
                    No items are added
                </div>)}
            <div>
                <div className={classes.cart}>

                    {
                        cartItems.map((item) => (
                            <div key={item.id} className={classes.products}>
                                <div className={classes.left}>
                                    <div className={classes.container}>
                                        <img src={item.image} alt="" />
                                    </div>

                                    <p>{item.name}</p>
                                    <p> {`₦ ${item.price}`}</p>


                                    <div className={classes.btn}>
                                        <button onClick={() => handleAddProduct(item)}>
                                            +
                                        </button>
                                        <span>
                                            {item.quantity}
                                        </span>
                                        <button onClick={() => handleRemoveProduct(item)}>
                                            -
                                        </button>
                                    </div>
                                </div>
                                <div className={classes.right}>
                                    {`₦${item.price}`}
                                </div>
                            </div>

                        ))
                    }
                </div>
                <div>
                    <p>delivery details</p>
                    <form action="
                  
                  
                  ">
                        <div>
                            <label htmlFor="">
                                Name  <sup>*</sup>
                            </label>
                            <input type="text" placeholder='Enter Name'>

                            </input>
                        </div> 
                        <div>
                            <label htmlFor="">
                                Name  <sup>*</sup>
                            </label>
                            <input type="text" placeholder='Enter Name'>

                            </input>
                        </div> 
                        <div>
                            <label htmlFor="">
                                Phone Number  <sup>*</sup>
                            </label>
                            <input type="text" placeholder='Enter Phone'>

                            </input>
                        </div> 
                        <div>
                            <label htmlFor="">
                                Location  <sup>*</sup>
                            </label>
                            <input type="text" placeholder='enter proper address' >

                            </input>
                        </div> 

                  </form>

                </div>
                <div className="total-price">
                    total price :
                    <div className='cart-item-total-price'>
                        {`${totalPrice}`}
                    </div>
                </div>
            </div>
        </div >


    )
}

export default Cart

