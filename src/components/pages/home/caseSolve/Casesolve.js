import React from 'react'
import './casesolve.css'
import OneCaseSolve from './OneCaseSolve'
const Casesolve = () => {
  const solveCases = [
    {
      numeric: '95',
      achievement: 'CASES WE WON',
    },
    {
      numeric: '206',
      achievement: 'LAWYERS TEAM',
    },
    {
      numeric: '524',
      achievement: 'FREE CONSULTATIONS',
    },
    {
      numeric: '387',
      achievement: 'CASES DISMISSED',
    },
  ]
  return (
    <div className='mt-20'>
      <div className='lg:w-[700px] mx-auto my-30 p-6 md:p-10 lg:p-2'>
        <h1 className='text-3xl font-bold md:font-bold lg:font-bold text-navyblue uppercase '>
          We solve complex legal issues with ease.
        </h1>
        <div className='casesolved-skild mt-10'>
          <p className='p-4 font-semibold text-slate-500'>
            Our skilled lawyers in the country working with our clients to
            ensure that they get one-stop legal solution.
          </p>
        </div>
      </div>
      <div className='flex justify-center items-center mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {' '}
          {solveCases.map((solvecase, i) => (
            <OneCaseSolve key={i} solvecase={solvecase} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Casesolve
