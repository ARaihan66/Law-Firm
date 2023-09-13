import React from 'react'
import { Input } from '@material-tailwind/react'
import { Textarea } from '@material-tailwind/react'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import './contactform.css'
const ContactForm = () => {
  return (
    <div className='flex flex-wrap justify-center bg-brown-700 p-12'>
      <div className='w-[600px]'>
        <h1 className='text-2xl md:text-5xl lg:text-5xl font-bold text-white'>
          Send us a Message
        </h1>
        <form action='' className='mt-8'>
          <div>
            <Input
              variant='static'
              placeholder='Your Name'
              className='font-mideum text-white text-[20px]'
            />
          </div>
          <div className='mt-8'>
            <Input
              variant='static'
              placeholder='Email'
              className='font-mideum text-white text-[20px]'
            />
          </div>
          <div className='mt-8'>
            <Input
              variant='static'
              placeholder='Subject'
              className='font-mideum text-white text-[20px]'
            />
          </div>

          <div className='mt-8'>
            {' '}
            <Textarea
              variant='static'
              placeholder='Message'
              className='font-mideum text-white text-[20px]'
            />
          </div>
          <div className='mt-8'>
            <input
              type='submit'
              className='contuct-btn px-5 py-4 md:px-[30px] md:py-[15px] lg:px-[30px] lg:py-[15px]'
              value='Send Message'
            />
          </div>
        </form>
      </div>
      <div className='w-[600px] mt-8 md:mt-10 lg:mt-0  lg:ml-14 '>
        <h1 className='text-2xl md:text-5xl lg:text-5xl font-bold text-white'>
          Our Location
        </h1>
        <div>
          <h1 className='text-xl text-white font-medium mt-8'>ADDRESS</h1>
          <p className='text-white'>
            15 Pills Avenue, Southern Street, Camron, Florida 33069 - USA
          </p>
          <h1 className='text-xl text-white font-medium mt-8'>PHONE</h1>
          <p className='text-white'>Appointments 1-258-987-000</p>
          <p className='text-white'>Free Helpline 1-258-987-007</p>
          <h1 className='text-xl text-white font-medium mt-8'>EMAIL</h1>
          <p className='text-white'>law123@gmail.com</p>
          <h1 className='text-xl text-white font-medium mt-8'>WORK HOURS</h1>
          <p className='text-white'>Mon to Fri : 09:00 am - 18:00 pm</p>
          <p className='text-white'>Sat : 08:00 am - 16:00 pm</p>
          <div className='flex mt-8'>
            <Link>
              <FaFacebookSquare className='text-white w-[30px]  h-[30px]' />
            </Link>
            <Link>
              <FaLinkedin className='text-white ml-4 w-[30px]  h-[30px]' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm