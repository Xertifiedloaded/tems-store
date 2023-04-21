import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/ui/header/header'
import { cartData } from '../constant/constant'
import { createContext } from 'react'
import UserContextApi from '../components/contextApi/userContextApi'


const MainLayout = () => {
    {/* <div className={classes.product}>
            {cartData
              .filter((item) => {
                if (search == "") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item, i) => (
                <ProductItems item={item} key={i} />
              ))}
      
          </div> */}
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