"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { ImSpinner2 } from "react-icons/im";

const Contact = () => {
    const {register, handleSubmit, formState: {errors}, reset } = useForm()
    const [message, setMessage] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const sendMessage = (data) => {
        setLoading(true);
        emailjs
        .send('service_9aru1k5', 'template_t11y72e', data, {
            publicKey: 'O033WhNbeA6n5sDrk'
        })
        .then(
            () => {
            setMessage("Your message has been received, I'll reply ASAP! :)")
            setLoading(false);
            reset();
           },
           (error) => {
            console.log("FAILED...", error.text)
           }
    )
    }

  return (
    <section id='contact' className='border border-white/10 p-6 sm:p-12'>
        <div className='text-center space-y-3'>
            <h2 className='font-black text-3xl'>Get in touch</h2>
            <p className='text-sm text-white/50'>
                Feel free to reach out. I'm always happy to connect and discuss your ideas.
            </p>
            {
                message && <p className="text-green-400 font-semibold">
                    {message}
                </p>
            }
        </div>
        <div className='mt-14 flex items-center flex-col'>
            <form className='space-y-10' onSubmit={handleSubmit(sendMessage)}>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
                    <input
                    {...register("fname")}
                    type="text" placeholder='Full Name' className='text-sm border-b border-b-white/10 pb-2 outline-none' />
                    <input
                    {...register("email")}
                    type="text" placeholder='Email' className='text-sm border-b border-b-white/10 pb-2 outline-none' />
                    <input
                    {...register("phone")}
                    type="text" placeholder='Phone' className='text-sm border-b border-b-white/10 pb-2 outline-none' />
                </div>
                <textarea
                {...register("message")}
                type="text" placeholder='Your message' className='w-full text-sm border-b border-b-white/10 pb-6 outline-none'></textarea>
                <input type="submit" value={"Send Message"} className='border border-white/10 px-4 py-2 hover:bg-white hover:text-black transition duration-300 cursor-pointer' />
                {
                    loading && <ImSpinner2 className='animate-spin' />
                }
            </form>
        </div>
    </section>
  )
}

export default Contact