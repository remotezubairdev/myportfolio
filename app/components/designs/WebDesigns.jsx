import React from 'react'
import Image from 'next/image'

const WebDesigns = () => {
  return (
    <section>
        <h3 className='text-center text-3xl font-black'>
          Websites I've built
        </h3>
        <div className='place-items-center grid grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-3 my-12'>
          <Image
          src="/home/nike-website.png"
          alt="nike_website_design"
          width={400}
          height={700}
          />
          <Image
          src="/home/payment-website.jpeg"
          alt="payment_website_design"
          width={400}
          height={700}
          />
          <Image
          src="/home/milleons.jpg"
          alt="milleons_website_design"
          width={400}
          height={700}
          />
        </div>
    </section>
  )
}

export default WebDesigns