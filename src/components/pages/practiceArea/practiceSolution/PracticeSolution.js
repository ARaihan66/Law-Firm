import React from 'react'
import property from '../../../../assets/property.jpg'
import Employment from '../../../../assets/employment.jpg'
import family from '../../../../assets/family.jpg'
import business from '../../../../assets/business.jpg'
import bank from '../../../../assets/bank.jpg'
import './practiceSolution.css'
import OnePracticeSolution from './OnePracticeSolution'
const PracticeSolution = () => {
  const practiceSolutions = [
    {
      image: property,
      name: 'For Property',
    },
    {
      image: Employment,
      name: 'For Employment',
    },
    {
      image: family,
      name: 'family',
    },
    {
      image: business,
      name: 'For Business',
    },
    {
      image: bank,
      name: 'For Bankruptcy',
    },
  ]
  return (
    <div className='practicesolution-back'>
      <h1 className='text-white text-center text-5xl font-bold pt-10'>
        Solutions From Law Firm
      </h1>
      <div className='flex justify-center py-10 flex-wrap'>
        {practiceSolutions.map((practiceslution, i) => (
          <OnePracticeSolution key={i} practiceslution={practiceslution} />
        ))}
      </div>
    </div>
  )
}

export default PracticeSolution
