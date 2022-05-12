import React from 'react'

const TextArea = ({ errors, touched, value, handleChange, name, type, label }) => {
  return (
    <div className='input'>
      <div className='input-label'>
        <label htmlFor={name}>{label}</label>
        <small>{errors && touched && errors}</small>
      </div>
      <textarea className='input-field text-area' type={type} id={name} name={name} onChange={handleChange} value={value} />
    </div>
  )
}

export default TextArea
