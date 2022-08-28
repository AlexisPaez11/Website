import React from 'react'
import ProjectData from '../components/project/ProjectData'
import Project from '../components/project/Project'

const Projects = () => {
  return (
    <div className='project-section'>
      <div className='project-container'>

      {
        ProjectData.map(({id, image, title, technologies, github, demo}) => {
          return (
            <Project key={id} image={image} title={title} technologies={technologies} github={github} demo={demo} />
            )
          })
        }
        </div>
    </div>
  )
}

export default Projects