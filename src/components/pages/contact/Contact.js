import React from 'react'
import './contact.css'
import ContactForm from './contactForm/ContactForm'
const Contact = () => {
  return (
    <div>
      <div className='relative contact-back contact-content'>
        <div className='z-40'>
          <p className='text-orange-400 text-xl font-medium text-center'>
            Most Successful Law Firm
          </p>
          <h1 className='text-orange-400 text-4xl  md:text-6xl md:font-bold lg:text-6xl lg:font-bold'>
            Contuct Us
          </h1>
        </div>
        <div className='absolute z-10 top-0 h-[100%] w-full bg-black/80'></div>
      </div>
      <ContactForm />
    </div>
  )
}

export default Contact