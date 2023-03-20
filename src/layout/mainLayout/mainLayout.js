import { createContext, useState } from "react";
import { Outlet } from 'react-router-dom'
import Header from '../../components/ui/header/header'
import Footer from '../../components/ui/footer/footer'
import { allProduct } from "../../constant";
import Cart from "../../components/addToCart/cart";
export const UserContext = createContext();
const MainLayout = () => {
    const [cart, setCart] = useState([])
    const handledClick = () => {
        setCart(cart+1)
        console.log(setCart)
    }
    return (
        <>
            <UserContext.Provider value={{ cart, handledClick }}>
                <Header />
                <Outlet />
                <Footer />
            </UserContext.Provider>
        </>
    )
}

export default MainLayout;