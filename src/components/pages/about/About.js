import React from 'react'
import './about.css'
import SolvingIssue from './solvingIssue/SolvingIssue'
import Innovative from './innovative/Innovative'
import Case from '../home/case/Case'


const About = () => {
  return (
    <div>
      <div className='about-back about-content relative'>
        <div className='z-40'>
          <p className='text-orange-400 text-xl font-medium text-center'>
            Most Successful Law Firm
          </p>
          <h1 className='text-orange-400 text-4xl  md:text-6xl md:font-bold lg:text-6xl lg:font-bold'>
            About Law firm
          </h1>
        </div>
        <div className='absolute z-10 top-0 h-[100%] w-full bg-black/70'></div>
      </div>
      <SolvingIssue />
      <Innovative />
      <Case />
    </div>
  )
}

export default About
