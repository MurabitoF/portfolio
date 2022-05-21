import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDiceD20, FaGuitar } from 'react-icons/fa'
import { SiJavascript, SiExpress, SiMysql, SiTypescript, SiMongodb, SiSequelize } from 'react-icons/si'
import { IoLogoGameControllerB } from 'react-icons/io'
import HobbieCard from '../../components/HobbieCard'
import './index.scss'

const AboutMe = () => {
  return (
    <div className='about-me'>
      <div className='about-me-photo'>
        <img src='/franco-colorful-bg.png' alt='Franco Murabito' />
      </div>
      <div className='about-me-info'>
        <h2 className='text-lg text-hover-effect'>About Me</h2>
        <p>
          I'm Franco Murabito, technology is one of my passions and that's why I started to get into the world of programming. I graduated from UTN as a university technician in programming in 2021. {/*eslint-disable-line*/}
        </p>
        <p>
          I focus as a web developer, I like especially the Frontend using ReactJS and environment technologies such as Redux, NextJS. I am also proficient in pure CSS, Sass, Bootstrap, Tailwind CSS.
        </p>
        <p>
          I also have knowledge in backend development and in the development of APIs in NodeJS and Java, I can handle SQL and non-SQL databases.
        </p>
      </div>
      <div className='about-me-skills'>
        <h2 className='text-lg text-hover-effect'>Skills</h2>
        <ul>
          <li id='html'>
            <FaHtml5 size={'4em'}/>
            <span>HTML5</span>
          </li>
          <li id='css'>
            <FaCss3Alt size={'4em'}/>
            <span>CSS3</span>
          </li>
          <li id='js'>
            <SiJavascript size={'4em'}/>
            <span>Javascript</span>
          </li>
          <li id='ts'>
            <SiTypescript size={'4em'}/>
            <span>Typescript</span>
          </li>
          <li id='react'>
            <FaReact size={'4em'}/>
            <span>ReactJS</span>
          </li>
          <li id='node'>
            <FaNodeJs size={'4em'}/>
            <span>NodeJS</span>
          </li>
          <li id='express'>
            <SiExpress size={'4em'}/>
            <span>Express</span>
          </li>
          <li id='mysql'>
            <SiMysql size={'4em'}/>
            <span>MySQL</span>
          </li>
          <li id='mongo'>
            <SiMongodb size={'4em'}/>
            <span>MongoDB</span>
          </li>
          <li id='sequelize'>
            <SiSequelize size={'4em'}/>
            <span>Sequelize</span>
          </li>
        </ul>
      </div>
      <div className='about-me-hobbies'>
        <h2 className='text-lg text-hover-effect'>Hobbies</h2>
        <p>Here are some of the things I do when I'm not developing software</p> {/*eslint-disable-line*/}
        <ul>
          <li>
            <HobbieCard
              icon={<FaDiceD20 size={'8em'}/>}
              hobbie='Play RPG games'
              description='I love to play table top rpg games like D&D or Call of Cthulu'/>
          </li>
          <li>
            <HobbieCard
              icon={<FaGuitar size={'8em'}/>}
              hobbie='Play guitar'
              description="I've been playing guitar for a few years now, it's one of the things that helps me to relax"/>
          </li>
          <li>
            <HobbieCard
              icon={<IoLogoGameControllerB size={'8em'}/>}
              hobbie='Play videogames'
              description='In my free time I enjoy playing video games'/>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AboutMe
