import { React, useState } from 'react'
import classes from '../bralet/bralet.module.css'
import { ReactComponent as Star } from '../../../../assets/images/star.svg'
import { allProduct } from '../../../../constant'
const Bralet = () => {
    const [products, setProducts] = useState(allProduct)
    const [cart, setCart] = useState([])
    const itemsClicked = (items) => {
        cart.push(items)
        console.log(items)
    }
    return (
        <div className={classes.main} >
            {
                products.map((items) => {
                    const { id, name, image, price } = items
                    return (
                        <div className={classes.imageContainer} key={id}>
                            <img src={image} alt="" />
                            <div className={classes.container}>
                                <p>{name}</p>
                                <span>
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                </span>
                                <p>₦{price}</p>
                                <div className={classes.btnCont}>
                                    <button className={classes.btn}>add to cart</button>
                                </div>
                           </div>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default Bralet;