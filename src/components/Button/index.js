import React from 'react'
import './index.scss'

const ButtonSolid = ({ children, action, type, className }) => {
  return (
    <button type={type} className={`solid hover-effect ${className}`} onClick={action}>{children}</button>
  )
}

export default ButtonSolid
