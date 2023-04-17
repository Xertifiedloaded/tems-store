import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/ui/header/header'
import { cartData } from '../constant/constant'
import { createContext } from 'react'
import UserContextApi from '../components/contextApi/userContextApi'


const MainLayout = () => {

    return (
        <>

            <UserContextApi>
                <Header />
                <Outlet />
            </UserContextApi>

        </>
    )
}
export default MainLayout;