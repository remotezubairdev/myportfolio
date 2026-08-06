import Image from 'next/image'
import React from 'react'
import LinkBtn from '../LinkBtn'
import { FaGithub, FaLinkedin, FaStar } from "react-icons/fa";
import TextPill from './TextPill';

const Hero = () => {
  return (
    <section id="hero" className='h-[90vh] flex flex-col items-center justify-center'>
        <TextPill 
        text="Available for freelance work" 
        icon={<FaStar size={20} className='text-yellow-500' />} 
        />
        <Image 
        width={300}
        height={300}
        alt='zubair_dev' 
        src={"/home/hero-mypic.jpeg"} 
        className='rounded rounded-full mt-4'
        />
        <div className='mt-12 text-center max-w-lg'>
            <h3 className='text-xl text-slate-300'>
                Zubair Asif Dar
            </h3>
            <div className='space-y-2'>
                <h1 className='text-3xl md:text-4xl font-black'>
                    Full-Stack Web Developer
                </h1>
                <p className='text-slate-300 text-md md:text-xl'>
                    I help businesses create fast, modern, and reliable websites that leave a great first impression and deliver a seamless user experience.
                </p>
                <div className='flex flex-col items-center gap-3 mt-6'>
                    <div className='flex items-center gap-3'>
                        <LinkBtn text="Contact Me" path={"/#contact"} />
                        <LinkBtn text="View Projects" path={"/#projects"} variant={2} />
                    </div>
                    <div className='flex items-center gap-3'>
                        <LinkBtn text="Linkedin" icon={<FaLinkedin size={25} />} path={"https://www.linkedin.com/in/zubair-a-9a7a0833b/"} variant={2} />
                        <LinkBtn text="Github" icon={<FaGithub size={25} />} path={"https://github.com/remotezubairdev"} variant={2} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero