import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/ui/header/header'
import Footer from '../../components/ui/footer/footer'
const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout;