import React from "react";
import { Link } from "react-router-dom";
import classes from "../header/header.module.css";
import Search from '../../../assets/images/search.svg'
import Category from "./categories/category";
import Bralet from "../../products/items/bralet/bralet";

import Cart from "../../addToCart/cart";
const Header = () => {
    return (
        <>
            <section>
                <div className={classes.main}>
                    <div className={classes.logo}>
                        <div className={classes.imageLogo}>
                            <Link to="">
                                TEMS LINGERIES
                            </Link>
                            <Link to="">
                                Store locator
                            </Link>
                            <Link to="">
                                Buy
                            </Link>
                            <Link to="">
                                Retailer
                            </Link>
                        </div>
                    </div>
                    <div className={classes.search}>
                        <input type="text" placeholder="Search for products" />
                        <span><img src={Search} alt="search" /></span>
                    </div>

                    <div className={classes.login}>
                        <Link to="">
                            <span>&#63;</span> Help<i class="fa-solid fa-chevron-down"></i>
                        
                        </Link>
                        <Link to="">
                            login/signup
                        </Link>
                        <Link to="">
                            <button>
                                <i class="fa-solid fa-cart-shopping"></i>
                                my cart {Cart.length}
                            </button>
                        </Link>
                    </div>
                </div>
                <Category />
                
            </section>
      
        </>
    );
};
export default Header;
