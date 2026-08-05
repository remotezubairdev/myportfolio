import Link from 'next/link'
import React from 'react'

const LinkBtn = ({ text, path, variant, icon }) => {
  return (
    <Link
    href={path}
    className={`${variant == 2 ? "border border-gray-700 hover:bg-gray-700" : "bg-white text-black hover:bg-gray-200"} flex items-center gap-2 transition font-bold rounded-xl text-xs sm:text-md md:text-lg px-2 md:px-4 py-2 md:py-2`}
    >
        {icon}
        {text}
    </Link>
  )
}

export default LinkBtn