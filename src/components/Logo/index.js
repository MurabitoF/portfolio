import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const Logo = () => {
  return (
    <Link to='/' style={{ textDecoration: 'none' }}>
      <h1 className='logo'>FM</h1>
    </Link>
  )
}

export default Logo
