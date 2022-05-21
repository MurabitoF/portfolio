import React, { useState } from 'react'
import NavBarItems from '../NavBarItems'
import './index.scss'

const MovileNav = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className='mobile-nav'>
      <div className={`burger-menu ${open && 'open'}`} onClick={toggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`mobile-nav-items ${open || 'closed'}`} onClick={toggle}>
        <NavBarItems />
      </div>
    </div>
  )
}

export default MovileNav
