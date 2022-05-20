import React from 'react'
import './index.scss'

const HobbieCard = ({ icon, hobbie, description }) => {
  return (
    <div className='hobbie-card hover-effect'>
        <h3>{hobbie}</h3>
        {icon}
        <p>{description}</p>
    </div>
  )
}

export default HobbieCard
