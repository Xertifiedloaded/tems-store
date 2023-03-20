import { useContext, React } from "react";
import { Link } from "react-router-dom";
import classes from "../header/header.module.css";
import Search from '../../../assets/images/search.svg'
import { UserContext } from "../../../layout/mainLayout/mainLayout";
const Header = () => {
    const {cart,handledClick} = useContext(UserContext);
    console.log(cart)
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
                        <Link to="/">
                            login/signup
                        </Link>
                        <Link to="">
                        
                            <button>
                                <i class="fa-solid fa-cart-shopping"></i>
                                my cart {cart.length}
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
      
        </>
    );
};
export default Header;
