import React from 'react'
import { useContext } from 'react'
import { userContent } from '../../mainLayout/mainLayout'

const Product = () => {
    const { productItems, handleAddProduct } = useContext(userContent)
    return (
        <>
            {
                productItems.map((productItem) => (
                    <div key={productItem.id}>
                        <p>{productItem.name}</p>
                        <p>{productItem.price}</p>
                        <button onClick={() => handleAddProduct(productItem)}>
                            add to cart
                        </button>
                    </div>
                ))
            }
        </>
    )
}

export default Product

