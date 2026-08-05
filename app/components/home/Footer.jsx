import React from 'react'
import LinkBtn from '../LinkBtn'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='py-12 flex justify-between'>
        <div>
            <h3 className='text-white/60'>
                Zubair Asif Dar
            </h3>
            <h2 className='text-2xl'>
                Full Stack Web Developer
            </h2>
            <div className='mt-6 flex gap-3 items-center'>
                <LinkBtn text="Contact Me" path={"/#contact"} />
                <LinkBtn icon={<FaGithub size={25} />} path={"https://github.com/remotezubairdev"} variant={2} />
                <LinkBtn icon={<FaLinkedin size={25} />} path={"https://www.linkedin.com/in/zubair-a-9a7a0833b/"} variant={2} />
            </div>
        </div>
        <div>
            <h4 className='text-2xl'>
                Contact Me
            </h4>
            <p className='font-bold mt-6'>
                <Email
                Email: {" "}
                <span className='font-light text-white/80'>
                    remote.zubairdev@gmail.com
                </span>
            </p>
            <p className='font-bold'>
                Phone: {" "}
                <span className='font-light text-white/80'>
                    +92 332 875 4442
                </span>
            </p>
        </div>
    </footer>
  )
}

export default Footer