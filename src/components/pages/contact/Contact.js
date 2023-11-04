import React from 'react'
import './contact.css'
import ContactForm from './contactForm/ContactForm'
const Contact = () => {
  return (
    <div>
      <div className='relative contact-back contact-content'>
        <div className='z-20'>
          <p className='text-amber-500 md:text-xl font-medium uppercase'>
            Most Successful Law Firm
          </p>
          <h1 className='text-amber-500 text-3xl mt-4 font-bold md:text-5xl lg:text-6xl lg:font-medium lg:mt-3 uppercase'>
            Contact Us
          </h1>
        </div>
        <div className='absolute z-10 top-0 h-[100%] w-full bg-black/80'></div>
      </div>
      <ContactForm />
    </div>
  )
}

export default Contact
