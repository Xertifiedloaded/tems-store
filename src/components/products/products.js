import React from 'react'
import Item from './items/item'
import classes from '../products/product.module.css'
import { allProduct } from '../../constant'
import { bra } from '../../constant/index'
import Bralet from './items/bralet/bralet'
import { panties } from '../../constant/index'
import Pants from './items/pants/pants'
const Products = () => {
  return (
    <div className={classes.main}>
      <p>
        MEN'S Boxers
      </p>
      <li>
        {

          allProduct.map((products, i) => (
            <Item {...products} key={i} />

          ))

        }
      </li>
      <p>WOMEN'S BRA</p>
      <li>
        {
          bra.map((items, i) => (
            <Bralet {...items} key={i} />
          ))
        }

      </li>
      <p>PANTS</p>
      <li>
        {
          panties.map((items, i) => (
            <Pants {...items} key={i} />
          )

          )
        }
      </li>
    </div>
  )
}

export default Products;