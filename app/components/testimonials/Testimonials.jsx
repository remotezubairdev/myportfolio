import React from 'react'
import Image from 'next/image'
import FeaturedProject from './FeaturedProject'

const Testimonials = () => {
  return (
    <section id='testimonials' className='py-12'>
        <div className='text-center flex flex-col items-center'>
            <h2 className='text-[#F29D38] font-black text-[24px]'>
                Testimonials
            </h2>
            <div className='max-w-3xl mt-4 flex flex-col items-center'>
                <Image
                src="/home/rating.png"
                width={130}
                height={40}
                alt="rating_from_client"
                className='my-2'
                />
                <h3 className='text-3xl '>
                    “Excellent work! The website looks modern, professional, and easy to navigate. The clean design, well-organized layout, and premium feel create a strong first impression. Great job!”
                </h3>
                <div className='mt-8 w-full flex items-center justify-between'>
                    <div>
                        <div className='text-start'>
                            <h4 className='font-bold text-lg'>
                                Arif Javaid Dar
                            </h4>
                            <p className='text-white/60'>
                                Founder of Allurz
                            </p>
                        </div>
                    </div>
                    <Image
                    src="/home/allurz-logo.png"
                    alt='allurz_client_logo'
                    width={130}
                    height={60}
                    />
                </div>
            </div>
        </div>
        <FeaturedProject />
    </section>
  )
}

export default Testimonials