import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './index.scss'

const NavBarItem = ({ children, link }) => {
  const { pathname } = useLocation()

  const selected = pathname === link

  return (
    <Link to={link} className={selected ? 'nav-item nav-item-selected' : 'nav-item'}>
        <h3>{children}</h3>
    </Link>
  )
}

export default NavBarItem
