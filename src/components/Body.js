import React, { useEffect } from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import { isMenuOpen, openMenu, toggleMenu } from './utils/appSlice';
import { useDispatch } from 'react-redux'
function Body() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(openMenu());
  },[]);
  
  return (
    <div className='flex w-[100%] mt-10'>
        <SideBar />
        <Outlet />
    </div>
  )
}

export default Body