import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div className='flex-wrap gap-y-4 py-4 flex justify-between'>
      <div>
        <h3 className='font-bold text-xl'>
            Education
        </h3>
        <div className='mt-3 space-y-3'>
          <div>
            <span className='text-white/60'>
              2023-2026
            </span>
            <h6>
              High School at Defence Cambridge Campus
            </h6>
          </div>
          <div>
            <span className='text-white/60'>
              2026-Present
            </span>
            <h6>
              To be enrolled for A levels
            </h6>
          </div>
        </div>
      </div>
      <div>
        <h3 className='font-bold text-xl'>
            Certifications
        </h3>
        <div className='mt-3 space-y-3'>
          <div className='space-y-3'>
            <span className='text-white/60'>
              Harvard Univerity CS50x Certificate
            </span>
            <h6>
              CS50x – Introduction to Computer Science
            </h6>
            <Image
            src="/home/CS50x.png"
            alt='cs50_certificate'
            width={300}
            height={200}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills