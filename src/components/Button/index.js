import React from 'react'
import './index.scss'

const ButtonSolid = ({ children, action }) => {
  return (
    <button className='solid hover-effect' onClick={action}>{children}</button>
  )
}

export default ButtonSolid
