import React from 'react'

import team1 from '../../../assets/team-1.jpg'
import team2 from '../../../assets/team-2.jpg'
import team3 from '../../../assets/team-3.jpg'
import team4 from '../../../assets/team-4.jpg'
import './attorney.css'
import OneAttorney from './oneattorney/OneAttorney'
const Attorney = () => {
  const Attorneys = [
    {
      img: team1,
      name: 'Paz Coyers',
      desig: 'Senior Attorney',
    },
    {
      img: team2,
      name: 'Wanita Touchette',
      desig: 'Senior Attorney',
    },
    {
      img: team3,
      name: 'Jefferson Leveston',
      desig: 'Senior Attorney',
    },
    {
      img: team4,
      name: 'Gali Borzillo',
      desig: 'Senior Attorney',
    },
    {
      img: team2,
      name: 'Wanita Touchette',
      desig: 'Senior Attorney',
    },
    {
      img: team1,
      name: 'Paz Coyers',
      desig: 'Senior Attorney',
    },
    {
      img: team4,
      name: 'Gali Borzillo',
      desig: 'Senior Attorney',
    },

    {
      img: team3,
      name: 'Jefferson Leveston',
      desig: 'Senior Attorney',
    },
  ]
  return (
    <div>
      <div className='relative attorney-back Attorney-content'>
        <div className='z-20'>
          <p className='text-amber-500 md:text-xl font-medium uppercase'>
            Most Successful Law Firm
          </p>
          <h1 className='text-amber-500 text-3xl mt-4 font-bold md:text-5xl lg:text-6xl lg:font-medium lg:mt-3 uppercase'>
            The Lawer
          </h1>
        </div>
        <div className='absolute z-10 top-0 h-[100%] w-full bg-black/80'></div>
      </div>
      <div className='mx-auto my-0 lg:w-[1250px]'>
        <h1 className='text-3xl mt-20  font-bold  uppercase text-center text-navyblue'>
          Meet Our Lawers
        </h1>
        <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-20 p-10 mt-2 mb-10'>
          {Attorneys.map((attorney, i) => (
            <OneAttorney key={i} attorney={attorney} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Attorney
