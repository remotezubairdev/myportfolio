"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import LinkBtn from '../LinkBtn'
import { projectDetails } from '../../../constants/projectDetails'

import { FaGithub } from 'react-icons/fa'
import { IoIosArrowDown } from "react-icons/io";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(1);
  const [projectImage, setProjectImage] = useState("/projects/goal-planner.png");
  return (
    <section id="projects" className='flex flex-wrap gap-y-12 justify-between py-12'>
      <div>
        <h2 className='text-3xl font-black'>
            Projects I've worked on
        </h2>

        

        <div className='mt-12 flex flex-col gap-4'>
          {
            projectDetails.map(project => (
              <div key={project.id}>
                <button 
                className={`flex items-center justify-between cursor-pointer text-start border border-white/10 w-xs sm:w-sm lg:w-xl p-3 ${project.id == selectedProject ? "bg-white/10" : ""}`}
                onClick={() => {
                  setSelectedProject(project.id)
                  setProjectImage(project.imagePath)
                }}
                >
                  {project.title}
                  <IoIosArrowDown className={`${project.id == selectedProject ? "rotate-180" : ""} transition duration-300`} />
                </button>
                <div className={`grid ${project.id == selectedProject ? "grid-rows-[1fr]" : "grid-rows-[0fr]" } transition-all duration-300`}>
                  <div className={`max-w-xl overflow-hidden`}>
                    <div className='mt-8 space-y-4'>
                      <h3 className='text-xl font-semibold'>
                        {project.title}
                      </h3>
                      <p className='text-white/60'>
                        {project.description}
                      </p>
                      <div className='w-fit flex items-center gap-3'>
                        <LinkBtn text="View Live Demo" path={project.liveDemoLink} />
                        <LinkBtn icon={<FaGithub />} text="Github Repository" path={project.githubRepo} variant={2} />
                      </div>
                      {
                        !project.githubRepo && <p className='text-red-400 border border-red-400 p-2'>
                          Note: The github repository is  private
                          </p>
                      }
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <ProjectCard projectImage={projectImage} />
    </section>
  )
}

export default Projects