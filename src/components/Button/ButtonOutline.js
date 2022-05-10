import React from 'react'

const ButtonOutline = ({ children, action }) => {
  return (
      <button className='outline hover-effect' onClick={action}>{children}</button>
  )
}

export default ButtonOutline
