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

      email: 'mail123@gmail.com',
      phone: '01285552418',
    },
    {
      img: team2,
      name: 'Wanita Touchette',
      desig: 'Senior Attorney',

      email: 'wain123@gmail.com',
      phone: '01344425418',
    },
    {
      img: team3,
      name: 'Jefferson Leveston',
      desig: 'Senior Attorney',

      email: 'jeff123@gmail.com',
      phone: '01467355418',
    },
    {
      img: team4,
      name: 'Gali Borzillo',
      desig: 'Senior Attorney',

      email: 'gali123@gmail.com',
      phone: '01728555418',
    },
    {
      img: team2,
      name: 'Wanita Touchette',
      desig: 'Senior Attorney',

      email: 'wain123@gmail.com',
      phone: '01344425418',
    },
    {
      img: team1,
      name: 'Paz Coyers',
      desig: 'Senior Attorney',

      email: 'mail123@gmail.com',
      phone: '01285552418',
    },
    {
      img: team4,
      name: 'Gali Borzillo',
      desig: 'Senior Attorney',

      email: 'gali123@gmail.com',
      phone: '01728555418',
    },
    
    {
      img: team3,
      name: 'Jefferson Leveston',
      desig: 'Senior Attorney',

      email: 'jeff123@gmail.com',
      phone: '01467355418',
    },
  ]
  return (
    <div>
      <div className='attorney-back Attorney-content'>
        <div>
          <p className='text-orange-400 text-xl font-medium text-center'>
            Most Successful Law Firm
          </p>
          <h1 className='text-orange-400 text-4xl  md:text-6xl md:font-bold lg:text-6xl lg:font-bold'>
            The Attorneys
          </h1>
        </div>
      </div>
      <div className='mx-auto my-0 lg:w-[1250px]'>
        <h1 className='text-5xl text-red-600 text-center font-bold mt-8'>
          Meet Our Lawers
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-6 p-10 mt-14'>
          {Attorneys.map((attorney, i) => (
            <OneAttorney key={i} attorney={attorney} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Attorney
