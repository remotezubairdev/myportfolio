import React from 'react'
import Image from 'next/image'

const ProjectCard = ({ projectImage }) => {
  return (
    <div className='max-w-xl flex flex-col'>
      <div>
        <Image width={500} height={300} className='w-full' alt='project' src={projectImage} />
      </div>
    </div>
  )
}

export default ProjectCard