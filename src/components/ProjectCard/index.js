import React from 'react'
import './index.scss'

const ProjectCard = ({ title, description, technologies, url }) => {
  return (
    <div className='card'>
        <h3>{title.replaceAll('-', ' ').toUpperCase()}</h3>
        <p className='card-description'>{description}</p>
        <div>
          <h4>Technologies</h4>
          <ul className='card-list-tech'>
            {technologies.map(tech => {
              return <li key={tech}>{tech.replace(/^\w/, (c) => c.toUpperCase())}</li>
            })}
          </ul>
      </div>
      <a href={url} className='button card-button hover-effect'>Visit GitHub repository</a>
    </div>
  )
}

export default ProjectCard
