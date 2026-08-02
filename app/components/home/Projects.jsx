import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section id="projects">
            <div className='bg-linear-to-tr from-slate-900 to-slate-800 shadow-pink-300/20 shadow-2xl border border-slate-700/50 rounded-2xl p-16 mt-6 w-full h-[300px]'>
                <h1 className='text-center text-3xl font-black'>
                    Projects I've worked on
                </h1>
                <div className='grid grid-cols-2'>
                  <ProjectCard />
                </div>
            </div>
    </section>
  )
}

export default Projects