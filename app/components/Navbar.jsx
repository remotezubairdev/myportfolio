"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { navLinks } from '../../constants/navLinks'
import { CiMenuBurger } from 'react-icons/ci'
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className='md:h-[10vh] flex justify-center items-center'>
        <nav className='shadow-sm shadow-gray-600/50 px-16 py-2 md:rounded-full md:mt-0 mt-12 border border-gray-50/10'>
            <ul className='hidden md:flex items-center gap-8 text-md'>
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

            {/* Navigation Menu for mobile */}
            <div className='block md:hidden'>
              {
                !showMenu && (
                  <CiMenuBurger className="cursor-pointer" size={30} onClick={() => setShowMenu(true)} />
                )
              }
            </div>
            <div className={`grid ${showMenu ? "grid-rows-[1fr]" : "grid-rows-[0fr] w-0"} transition-all duration-300`}>
              <div className='overflow-hidden'>
                <ul className={`flex flex-col md:hidden items-center gap-8 text-md`}>
                  <RxCross1 className="cursor-pointer" size={30} onClick={() => setShowMenu(false)} />
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
              </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar