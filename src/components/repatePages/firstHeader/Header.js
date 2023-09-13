import React from 'react'
import { FaPhone, FaClock, FaEnvelope } from 'react-icons/fa'
import './header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='hidden lg:flex justify-evenly p-5 header-shadow'>
      <div className='flex items-center'>
        <FaPhone className='mr-2 header-icon' />
        <p className='header-p'>Get Free Advice +880-17245895</p>
      </div>
      <div className='flex items-center'>
        <FaClock className='mr-2 header-icon' />
        <p className='header-p'>Monday to Friday 9am-6pm</p>
      </div>
      <div className='flex items-center'>
        <FaEnvelope className='mr-2 header-icon' />
        <p className='header-p'> law123@gmail.com</p>
      </div>
      <div>
        <Link to='/contact'>
          <button className='header-btn'>Lets Contact</button>
        </Link>
      </div>
    </div>
  )
}

export default Header
