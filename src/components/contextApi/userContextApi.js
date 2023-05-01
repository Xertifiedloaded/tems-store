import React, { useState, createContext, useEffect } from 'react'
import { cartData } from '../../constant/constant'
import axios from 'axios'
export const UserContext = createContext()

export const UserContextApi = ({ children }) => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [open, SetisOpen] = useState(false)
    const [search, setSearch] = useState("")
    const itemsPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
    const BankCharges = 20;
    const Delivery = "";
    const totalPrice = parseFloat(itemsPrice + BankCharges + Delivery);

    const handleValue = (e) => {
        setSearch(e.target.value)
    }
    const handleSearch = (e) => {
        e.preventDefault()
        console.log(search)
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios({
                    method: "GET",
                    // url: 'https://fakestoreapi.com/products',
                    url: "data.json",
                    headers: {
                        "Content-Type": "application.json",
                        "Accept": "application.json"
                    },
                })
                setProducts(response.data)
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts()
    }, [])

    const handleClose = () => {
        SetisOpen(!open)
    }
    const addToCart = (product) => {
        const exist = cart.find((x) => x.id === product.id);
        if (exist) {
            setCart(
                cart.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )

            );
            console.log(product)
        } else {
            setCart([...cart, { ...product, qty: 1 }]);

        }
    }

    const removeFromCart = (product) => {
        const exist = cart.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCart(cart.filter((x) => x.id !== product.id));
        } else {
            setCart(
                cart.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    }
    const clearCart = () => {
        setCart([])
        totalPrice = ""
       

    }

    const value = {
        products,
        cart,
        setCart,
        setProducts,
        open,
        SetisOpen,
        clearCart,
        handleClose,
        open,
        SetisOpen,
        addToCart,
        removeFromCart,
        search,
        setSearch,
        handleValue,
        handleSearch,
        search,
        itemsPrice,
        BankCharges,
        Delivery,
        totalPrice
    }

    return (
        <UserContext.Provider value={value} >
            {children}
        </UserContext.Provider>
    )
}

export default UserContextApi
