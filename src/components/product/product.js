import React from 'react'
import { useContext } from 'react'
import { userContent } from '../../mainLayout/mainLayout'
import classes from './product.module.css'
const Product = () => {
    const { productItems, handleAddProduct } = useContext(userContent)
    return (
        <>
            <div className={classes.main}>
                {
                    productItems.map((productItem) => (
                        <div key={productItem.id} className={classes.items}>
                            <img src={productItem.image} alt="" />
                            <p className={classes.name}>{productItem.name}</p>
                            <p>{`₦ ${productItem.price}`}</p>
                            <button onClick={() => handleAddProduct(productItem)}>
                                add to cart
                            </button>
                        </div>
                    ))
                }
       </div>
        </>
    )
}

export default Product

