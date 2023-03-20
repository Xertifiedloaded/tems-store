import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContent } from '../../../mainLayout/mainLayout'
import classes from './header.module.css'
const Header = () => {
    const { cartItems } = useContext(userContent)
    return (
        <>
            <header>
                <div className={classes.main}>
                    <h3>
                        Xertifiedloaded
                    </h3>
                    <div>
                        <Link to="/cart">
                            cart
                            <span>
                                {cartItems.length === 0 ? "" : cartItems.length}
                            </span>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header