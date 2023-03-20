import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContent } from '../../../mainLayout/mainLayout'
import classes from './header.module.css'
const Header = () => {
    const { cartItems }=useContext(userContent)
  return (
      <>
          <div className={classes.main}>
              <h3>
                  hello
              </h3>

              <ul>
               <a>home</a>
               <a>sign up</a>
                  <Link to="/cart">
                      cart
                      <span>
                          {cartItems.length === 0 ? "" : cartItems.length}
                      </span>
                  </Link>
              </ul>
       </div>
      </>
  )
}

export default Header