import { useContext, useEffect, useState } from "react";
import classes from '../bralet/../../items/bralet/items.module.css'
import { ReactComponent as Star } from '../../../../assets/images/star.svg'
import { allProduct } from '../../../../constant'
import { UserContext } from "../../../../layout/mainLayout/mainLayout";
const Bralet = () => {

    const PAGE_PRODUCTS = '/'
    const PAGE_CART = '/cart'
    const [products, setProducts] = useState(allProduct)
    // add to cart //
    const [cart, setCart] = useState([])
    const addToCart = (items) => {
        setCart([...cart, { ...items }])
    }

    // remove from cart
    const removeFromCart = (productToRemove) => {
        setCart(
            cart.filter((items) => items !== productToRemove)
        )
    }

    // navigation
    const [page, setPage] = useState(PAGE_PRODUCTS)
    const NavigateTo = (nextPage) => {
        setPage(nextPage)
    }
    const NavigateBack = (prevPage) => {
        setPage(prevPage)
    }
    // render all products
    const renderProducts = () => (
        <>
            <button onClick={() => NavigateTo(PAGE_CART)}>go to cart{cart.length}</button>
            <button onClick={() => NavigateBack(PAGE_PRODUCTS)}>view products</button>
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
                                        <button onClick={() => addToCart(items)} className={classes.btn}><i class="fa-solid fa-cart-shopping"></i>add to cart</button>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
        </>
    )





    // showCart on click 
    const renderCart = () => (
        <>

            <button onClick={() => NavigateTo(PAGE_CART)}>go to cart{cart.length}</button>
            <button onClick={() => NavigateBack(PAGE_PRODUCTS)}>view products</button>
            <div className={classes.mainClick} >

                {
                    cart.map((items) => {
                        // i map cart instead of products
                        const { id, name, image, price } = items
                        return (
                            <div className={classes.imageContainerClick} key={id}>
                                <img src={image} alt="" />
                                <div className={classes.containerClick}>
                                    <p>{name}</p>
                                    <span>
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                    </span>
                                    <p>₦{price}</p>
                                    <div className={classes.btnCont}>
                                        <button onClick={() => removeFromCart(items)} className={classes.btnClick}><i class="fa-solid fa-cart-shopping"></i>remove from cart</button>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }
                <p>hello</p>
            </div>

        </>
    )
    return (
        <>
            {page === '/' && renderProducts()}
            {page === '/cart' && renderCart()}
        </>
    )
}

export default Bralet;