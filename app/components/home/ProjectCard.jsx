import React from 'react'
import Image from 'next/image'
import { projectDetails } from './../../../constants/projectDetails';

const ProjectCard = ({ projectImage }) => {
  const project = projectDetails.find(project => project.imagePath == projectImage)
  return (
    <div className='max-w-xl flex flex-col'>
      <div>
        <Image width={500} height={300} className='w-full' alt={project.imagePath} src={projectImage} />
      </div>
    </div>
  )
}

export default ProjectCard