import React from 'react'
import classes from '../pants/pants.module.css'
import {ReactComponent as Star} from "../../../../assets/images/star.svg"
const Pants = ({id,name,image,price}) => {
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

export default Pants;