import React from 'react'
import Logo from '../Logo'
import NavBarItem from '../NavBarItem'
import './index.scss'

const NavBar = () => {
  return (
    <nav>
        <Logo />
        <div className="nav-items">
            <NavBarItem link="/">HOME</NavBarItem>
            <NavBarItem link="/aboutme">ABOUT ME</NavBarItem>
            <NavBarItem link="/projects">PROJECTS</NavBarItem>
            <NavBarItem link="/contactme">CONTACT ME</NavBarItem>
        </div>
    </nav>
  )
}

export default NavBar
