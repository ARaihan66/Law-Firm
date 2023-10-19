import React from 'react'
import './about.css'
import SolvingIssue from './solvingIssue/SolvingIssue'
import Innovative from './innovative/Innovative'
import Case from '../home/case/Case'


const About = () => {
  return (
    <div>
      <div className='about-back about-content relative'>
        <div className='z-10'>
          <p className='text-amber-500 md:text-xl font-medium uppercase'>
            Most Successful Law Firm
          </p>
          <h1 className='text-amber-500 text-3xl mt-4 font-bold md:text-5xl lg:text-6xl lg:font-medium lg:mt-3 uppercase'>
            About Law firm
          </h1>
        </div>
        <div className='absolute z-8 top-0 h-[100%] w-full bg-black/70'></div>
      </div>
      <SolvingIssue />
      <Innovative />
      <Case />
    </div>
  )
}

export default About
