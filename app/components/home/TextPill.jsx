import React from 'react'

const TextPill = ({ text, icon }) => {
  return (
    <div className='border border-gray-700 p-1 text-sm text-gray-300 px-4 py-2 rounded-full flex gap-3 items-center'>
        {icon}
        {text}
    </div>
  )
}

export default TextPill