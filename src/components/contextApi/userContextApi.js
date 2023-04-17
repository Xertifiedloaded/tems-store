import React, { useState, createContext } from 'react'
import { cartData } from '../../constant/constant'
export const UserContext = createContext()

export const UserContextApi = ({ children }) => {
    const [cartItem, setCartItem] = useState([])
    const [search, setSearch] = useState('')
    const addToCart = (product) => {
        const exist = cartItem.find((item) =>
            item.id == product.id)
        if (exist) {
            setCartItem(
                cartItem.map((item) =>
                    item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
                )
            );
        } else {
            setCartItem([...cartItem], { ...product, qty: 1 })
        }
    }
    const removeProduct = (product) => {
        const exist = cartItem.find((item) =>
            item.id == product.id)
        if (exist.qty == 1) {
            setCartItem(cartItem.filter((item) => item.id !== product.id))
        } else {
            setCartItem(cartItem.map((item) =>
                item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
            ))
        }
    }
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    const value = {
        cartData,
        removeProduct,
        addToCart,
        search,
        setSearch,
        handleSearch
    }
    return (
        <UserContext.Provider value={value} >
            {children}
        </UserContext.Provider>
    )
}

export default UserContextApi
