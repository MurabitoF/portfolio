import React, { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import Card from '../../components/Card'
import './index.scss'

const Projects = () => {
  const [repos, setRepos] = useState([])
  const url = 'https://api.github.com/users/MurabitoF/repos?sort=created&per_page=6'

  useEffect(() => {
    if (!repos.length) {
      fetch(url)
        .then(res =>
          res.json()
        )
        .then(data => data.map(repo => {
          return {
            title: repo.name,
            description: repo.description,
            technologies: repo.topics,
            url: repo.html_url
          }
        }))
        .then(setRepos)
        .catch(err => {
          console.log(err)
        })
    }
  }, [])

  console.log(repos)
  return (
    <section className='projects'>
      <h2 className='text-lg'>Here are some of the projects I have been working on</h2>
      <div className='projects-grid-container'>
        {repos.map(repo => {
          return <Card key={repo.title} {...repo} />
        })}
      </div>
      <h3>This are some of my projects if you want to see more please check my github profile</h3>
      <a href='https://github.com/MurabitoF'>
        <FaGithub className='svg-hover-effect' color='#EFEFEF' size={'4em'} />
      </a>
    </section>
  )
}

export default Projects
