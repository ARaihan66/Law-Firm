import React from 'react'
import { Link } from 'react-router-dom'
import aboutimg from '../../../../assets/about-1-1.jpg'
import aboutimg1 from '../../../../assets/about-1-2.jpg'
import './solving.css'
const SolvingIssue = () => {
  return (
    <div className='flex justify-around p-10 flex-wrap'>
      <div className='w-[420px]'>
        <p className='text-xl font-semibold mt-8'>
          Proident sunt culpa officia deserunt
        </p>
        <h1 className='text-5xl font-semibold mt-4'>
          Solving issues with great attention.
        </h1>
        <p className='mt-8'>
          Labore et dolore magna aliqu. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco dui laboris nisi ut aliquip ex dea commodo
          consequat. Duis aute irure dolor reprehenderit kind voluptate velit
          ese cillum dolore fugiat nula pariatur. Excepteur sint occaecat
          cupidatas non.
        </p>
        <Link>
          <button className='about-btn mt-8'>View Service</button>
        </Link>
      </div>
      <div className='flex flex-wrap mt-6 md:mt-6 '>
        <img src={aboutimg} alt='' />
        <img
          src={aboutimg1}
          className='mt-4 md:mt-0 lg:mt-0 md:ml-4 lg:ml-4'
          alt=''
        />
      </div>
    </div>
  )
}

export default SolvingIssue