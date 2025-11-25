import React, { useState, useCallback } from 'react'
import Image from 'next/image'

const ContactUs: React.FC = () => {
  return (
    <div className='bg-black text-white flex flex-col justify-center pt-10 min-h-screen'>
      <div className='flex-1 flex flex-col justify-center items-center pt-10 lg:pt-6'>
        <div className='pb-10'>
          <Image 
            src='/assets/letter-k.png'
            width={40}
            height={40}
            alt='logo'
            className='invert'
          />
        </div>
        <h2 className='text-4xl font-bold'>Contact Us</h2>
        <form 
          action='https://formsubmit.co/kjrlabs9@gmail.com' 
          method='POST'
          className='flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]'
        >
          {/* FormSubmit Configuration */}
          <input type='hidden' name='_captcha' value='false' />
          <input type='hidden' name='_template' value='table' />
          <input type='hidden' name='_subject' value='New Contact Form Submission - KJR Labs' />
          
          <input 
            type='text' 
            name='name' 
            id='name' 
            maxLength={128}
            required 
            placeholder='Your Name'
            className='bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2'
          />
          <input
            type='email'
            name='email'
            id='email'
            maxLength={128}
            required
            placeholder='Your Email'
            className='bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2'
          />
          <input 
            type='tel' 
            name='phone' 
            id='phone' 
            maxLength={20}
            required 
            placeholder='Your Phone Number'
            className='bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2'
          />
          <input 
            type='text' 
            name='company' 
            id='company' 
            maxLength={128}
            placeholder='Company Name (Optional)'
            className='bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2'
          />
          <textarea
            id='message'
            name='message'
            maxLength={1048576}
            required
            placeholder='Your Message'
            className='bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]'
          ></textarea>
          <div className='text-center mt-10'>
            <button 
              type='submit'
              className='bg-white text-black rounded-3xl px-8 py-2 hover:bg-gray-200 transition-colors'
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
