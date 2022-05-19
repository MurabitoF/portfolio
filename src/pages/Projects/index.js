import React from 'react'
import { FaGithub } from 'react-icons/fa'
import ProjectCard from '../../components/ProjectCard'
import Loader from '../../components/Loader'
import useProjects from '../../hooks/useProjects'
import './index.scss'

const Projects = () => {
  const repos = useProjects('MurabitoF', 6)

  return (
    <section className='projects'>
      <h2 className='text-lg'>Here are some of the projects I have been working on</h2>
      {!repos.length
        ? <Loader />
        : (
      <div className='projects-grid-container'>
        {repos.map(repo => {
          return <ProjectCard key={repo.title} {...repo} />
        })}
      </div>
          )}
      <h3>This are some of my projects if you want to see more please check my github profile</h3>
      <a href='https://github.com/MurabitoF'>
        <FaGithub className='svg-hover-effect' color='#EFEFEF' size={'4em'} />
      </a>
    </section>
  )
}

export default Projects
