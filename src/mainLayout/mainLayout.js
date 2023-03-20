import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/ui/header/header'
import data, { cartList } from '../constant/constant'
import { createContext } from 'react'
export const userContent = createContext()
const { productItems } = data
const MainLayout = () => {
    const [cartItems, setCartItems] = useState([])
    const handleAddProduct = (product) => {
        const ProductExist = cartItems.find((item) => item.id === product.id)
        if(ProductExist) {
            setCartItems(cartItems.map((item) => item.id === item.product ?
                { ...ProductExist, quantity: ProductExist.quantity + 1 } : item)
            );
        }
        else {
            setCartItems([...cartItems, { ...product, quantity: 1 }])
        }
    }
    const handleRemoveProduct = (product) => {
        const ProductExist = cartItems.find((item) => item.id === product.id)
        if (ProductExist.quantity === 1) {
            setCartItems(cartItems.filter((item) => item.id !== product.id))
        } else {
            setCartItems(
                cartItems.map((items)=>items.id === product.id ? {...ProductExist,quantity : ProductExist.quantity - 1}:items)
            )
        }
    }
    const handleClearCart = () => {
        setCartItems([])
    }
    return (
        <>
            <userContent.Provider value={{ cartItems, setCartItems, productItems, handleAddProduct, handleRemoveProduct, handleClearCart }}>
                <Header />
                <Outlet  />
            </userContent.Provider>
        </>
    )
}
export default MainLayout;