import React from 'react'
import NavBarItem from './NavBarItem'

const NavBarItems = () => {
  return (
    <>
        <NavBarItem link="/">HOME</NavBarItem>
        <NavBarItem link="/aboutme">ABOUT ME</NavBarItem>
        <NavBarItem link="/projects">PROJECTS</NavBarItem>
        <NavBarItem link="/contactme">CONTACT ME</NavBarItem>
    </>
  )
}

export default NavBarItems
