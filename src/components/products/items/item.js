import React from 'react'
import classes from '../items/items.module.css'
import { ReactComponent as Star } from '../../../assets/images/star.svg'
const Item = ({ id, name, price, image, button, star }) => {
    return (
        <div className={classes.main}>
            <div className={classes.imageContainer}>
                <img src={image} alt="" />
                <p>{name}</p>
                <span>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </span>
                <p>₦{price}</p>
             
            </div>
        </div>
    )
}

export default Item