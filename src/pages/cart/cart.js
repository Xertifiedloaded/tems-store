import React from 'react'
import { userContent } from '../../mainLayout/mainLayout'
import { useContext } from 'react'
const Cart = () => {
    const { cartItems, handleRemoveProduct, handleAddProduct, handleClearCart } = useContext(userContent)
    const totalPrice = cartItems.reduce((price, items) => price + items.quantity * items.price, 0)
    return (

        <div>
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
                    no items are added
                </div>)}
            <div>
                {
                    cartItems.map((item) => (
                        <div key={item.id}>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <button onClick={() => handleRemoveProduct(item)}>
                                -
                            </button>
                            <button onClick={() => handleAddProduct(item)}>
                                +
                            </button>
                            <div>
                                {item.quantity}*{item.price}
                            </div>
                        </div>

                    ))
                }
                <div className="total-price">
                    total price :
                    <div className='cart-item-total-price'>
                        {totalPrice}
                    </div>
                </div>
            </div>

        </div >


    )
}

export default Cart

