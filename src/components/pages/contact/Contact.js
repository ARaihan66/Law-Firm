import React from 'react'
import './contact.css'
import ContactForm from './contactForm/ContactForm'
const Contact = () => {
  return (
    <div>
      <div className='contact-back contact-content'>
        <div>
          <p className='text-orange-400 text-xl font-medium text-center'>
            Most Successful Law Firm
          </p>
          <h1 className='text-orange-400 text-4xl  md:text-6xl md:font-bold lg:text-6xl lg:font-bold'>
            Contuct Us
          </h1>
        </div>
      </div>
      <ContactForm/>
    </div>
  )
}

export default Contact