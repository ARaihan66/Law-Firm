import React from 'react'
import './casesolve.css'
import OneCaseSolve from './OneCaseSolve'
const Casesolve = () => {
  const solveCases = [
    {
      numeric: '95',
      operation: '%',
      achievement: 'CASES WE WON',
    },
    {
      numeric: '206',
      operation: '+',
      achievement: 'LAWYERS TEAM',
    },
    {
      numeric: '524',
      operation: '+',
      achievement: 'FREE CONSULTATIONS',
    },
    {
      numeric: '387',
      operation: '+',
      achievement: 'CASES DISMISSED',
    },
  ]
  return (
    <div>
      <div className='lg:w-[600px] mx-auto my-30 p-6 md:p-10 lg:p-2'>
        <h1 className='text-3xl font-bold mt-16 md:text-3xl md:font-bold lg:text-3xl lg:font-bold'>
          We solve complex legal issues with ease.
        </h1>
        <div className='casesolved-skild mt-10'>
          <p className='p-4 font-serif font-semibold text-slate-500'>
            Proident culpa officia deserunt mollit animd laborum perspicia natus
            error voluptatem qui acusantium dolore laudan.
          </p>
        </div>
      </div>
      <div className='flex justify-center items-center mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {' '}
          {solveCases.map((solvecase, i) => (
            <OneCaseSolve key={i} solvecase={solvecase}></OneCaseSolve>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Casesolve
