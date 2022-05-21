import React from 'react'
import DesktopNav from '../DesktopNav'
import Logo from '../Logo'
import MovileNav from '../MobileNav'
import './index.scss'

const NavBar = () => {
  return (
    <nav>
        <Logo />
        <>
          <DesktopNav />
          <MovileNav />
        </>
    </nav>
  )
}

export default NavBar
