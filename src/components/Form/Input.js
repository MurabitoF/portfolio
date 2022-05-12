import React from 'react'
import './index.scss'

const Input = ({ errors, touched, value, handleChange, name, type, label }) => {
  return (
    <div className='input'>
      <div className='input-label'>
        <label htmlFor={name}>{label}</label>
        <small>{errors && touched && errors}</small>
      </div>
      <input className='input-field' type={type} id={name} name={name} onChange={handleChange} value={value} />
    </div>
  )
}

export default Input
