import React from 'react'
import classes from '../products/product.module.css'
import Bralet from './items/bralet/bralet'

const Products = () => {
  return (
    <div className={classes.main}>

      <ul>
        <li>
          <Bralet />
        </li>
      </ul>
    </div>
  )
}

export default Products;