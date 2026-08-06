import React from 'react'
import LinkBtn from '../LinkBtn'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { navLinks } from './../../../constants/navLinks';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='py-12 flex flex-wrap gap-y-12 justify-between'>
        <div>
            <h2 className='text-white/60'>
                Zubair Asif Dar
            </h2>
            <h2 className='text-2xl'>
                Full Stack Web Developer
            </h2>
            <div className='mt-6 flex gap-3 items-center'>
                <LinkBtn text="Contact Me" path={"/#contact"} />
                <LinkBtn text="Linkedin" icon={<FaLinkedin size={25} />} path={"https://www.linkedin.com/in/zubair-a-9a7a0833b/"} variant={2} />
                <LinkBtn text="Github" icon={<FaGithub size={25} />} path={"https://github.com/remotezubairdev"} variant={2} />
            </div>
        </div>
        <div>
            <h3 className='text-2xl'>
                Contact Me
            </h3>
            <p className='flex items-center gap-1 font-bold mt-6'>
                <MdEmail size={20} />
                Email: {" "}
                <span className='font-light text-white/80'>
                    remote.zubairdev@gmail.com
                </span>
            </p>
            <p className='flex items-center gap-1 font-bold'>
                <MdPhone size={20} />
                Phone: {" "}
                <span className='font-light text-white/80'>
                    +92 332 875 4442
                </span>
            </p>
        </div>
        <div>
            <h4 className='text-2xl'>
                Sections
            </h4>
            <ul className='flex flex-col gap-1 mt-1 text-white/80'>
                {
                    navLinks.map(link => <li key={link.name}><Link href={link.path}>{link.name}</Link></li>)
                }
            </ul>
        </div>
    </footer>
  )
}

export default Footer