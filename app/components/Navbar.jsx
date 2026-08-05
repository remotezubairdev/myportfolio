import React from 'react'
import Link from 'next/link'
import { navLinks } from '../../constants/navLinks'

const Navbar = () => {
  return (
    <header className='h-[10vh] flex justify-center items-center'>
        <nav className='shadow-sm shadow-gray-600/50 px-16 py-2 rounded-full border border-gray-50/10'>
            <ul className='flex items-center gap-8 text-md'>
              {
                navLinks.map(link => (
                  <li key={link.name}>
                    <Link 
                    href={link.path}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))
              }
              
            </ul>
        </nav>
    </header>
  )
}

export default Navbar