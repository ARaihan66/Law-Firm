import React from 'react'
import picture from '../../../../assets/law-icon.png'
import './expertLawer.css'
import { Link } from 'react-router-dom';
const ExpertLawer = () => {
  return (
    <div className='flex justify-center p-16 expert-back flex-wrap'>
      <img src={picture} alt='' srcset='' className='w-[100px]' />
      <div className='ml-6'>
        <h1 className='text-4xl font-bold text-white'>
          Get a Free Consultation From Expert Lawyers!
        </h1>
        <p className='text-white pt-3'>Stay in Touch and get free Advice .</p>
      </div>
      <Link to='/contact'>
        <button className='ml-6 mt-6 px-5 py-4 md:px-[30px] md:py-[15px] lg:px-[30px] lg:py-[15px] md:mt-6  lg:mt-2 expert-btn'>
          get in touch
        </button>
      </Link>
    </div>
  )
}

export default ExpertLawer