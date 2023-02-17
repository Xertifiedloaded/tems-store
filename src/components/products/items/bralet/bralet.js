import React from 'react'
import classes from '../bralet/bralet.module.css'
import {ReactComponent as Star} from '../../../../assets/images/star.svg'
const Bralet = ({ id, image, name, price ,button}) => {
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

export default Bralet;