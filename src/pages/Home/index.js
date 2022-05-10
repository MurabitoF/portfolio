import React from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonSolid from '../../components/Button'
import ButtonOutline from '../../components/Button/ButtonOutline'
import './index.scss'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='home'>
      <div className='hero-texts'>
        <h1 className='text-lg' id='first-text'>Hello,</h1>
        <h1 className='text-xl text-hover-effect'>I am Franco Murabito</h1>
        <h1 className='text-lg'>and I am a</h1>
        <h1 className='text-xl text-hover-effect'>JS Fullstack Developer</h1>
      </div>
      <div className='buttons'>
        <ButtonSolid action={() => navigate('/projects')}>My Projects</ButtonSolid>
        <ButtonOutline action={() => navigate('/contactme')}>Contact Me</ButtonOutline>
      </div>
    </div>
  )
}

export default Home
