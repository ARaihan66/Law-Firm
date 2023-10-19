import React from 'react'
import { Link } from 'react-router-dom'
import aboutimg from '../../../../assets/about-1-1.jpg'

import './solving.css'
const SolvingIssue = () => {
  return (
    <div className='flex justify-around p-10 flex-wrap'>
      <div className='mt-6 md:mt-6'>
        <img src={aboutimg} alt='' />
        <div className='mt-6'>
          <p className='uppercase text-navyblue text-xl font-semibold'>
            Mostafijur Rahaman
          </p>
          <p className='uppercase text-xl'>FOUNDER & SENIOR LAWYER</p>
        </div>
      </div>
      <div className='w-[420px]'>
        <p className='text-xl font-semibold text-navyblue mt-8'>
          Proident sunt culpa officia deserunt
        </p>
        <h1 className='text-3xl mt-4 font-bold md:font-bold lg:font-bold text-navyblue uppercase'>
          Solving issues with great attention.
        </h1>
        <p className='mt-8'>
          Labore et dolore magna aliqu. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco dui laboris nisi ut aliquip ex dea commodo
          consequat. Duis aute irure dolor reprehenderit kind voluptate velit
          ese cillum dolore fugiat nula pariatur. Excepteur sint occaecat
          cupidatas non.
        </p>
        <Link to='/practice'>
          <button className='about-btn mt-8'>View Service</button>
        </Link>
      </div>
    </div>
  )
}

export default SolvingIssue
