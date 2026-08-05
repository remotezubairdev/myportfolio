import Image from 'next/image'
import React from 'react'

const FeaturedProject = () => {
  return (
    <div className='flex xl:flex-row flex-col justify-between items-center'>
        <Image
        src="/home/featured-project.png"
        alt='website_project_example'
        width={700}
        height={600}
        />
        <div className='max-w-xl space-y-3'>
            <h4 className='font-black text-3xl'>
                Website made for Allurz, a multi-services company
            </h4>
            <p className='text-white/60'>
                A fully mobile responsive website with modern design, built with Next JS and Tailwind CSS. 
            </p>
        </div>
    </div>
  )
}

export default FeaturedProject