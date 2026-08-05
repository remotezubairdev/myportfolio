import Image from 'next/image'
import React from 'react'
import Skills from './Skills'

const About = () => {
  return (
    <section className='flex flex-col-reverse xl:flex-row justify-between gap-y-12 items-center py-32'>
        <div className='max-w-2xl space-y-4'>
            <h2 className='text-3xl font-black'>
                About Me
            </h2>
            <p>
                I’m a 17 year old self-taught full-stack web developer with experience in building modern & mobile responsive websites, so that I can help my clients generate more leads and grow their businesses. 
                <br /> <br/>
                I have foundations in new industry-standard technologies to build fast web applications, including React JS, Next JS, Tailwind CSS, and Django.
            </p>

            <div className='mt-8'>
                <Skills />
            </div>
        </div>
        <Image width={600} height={400} alt="zubair" src="/home/about-me.png" />
    </section>
  )
}

export default About