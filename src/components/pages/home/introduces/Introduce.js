import React from 'react'
import './introduce.css'
const Introduce = () => {
  return (
    <div className='mt-20 mb-[100px]'>
      <div className='flex justify-center flex-wrap px-8 md:flex-wrap md:px-8'>
        <div className='lg:w-[600px]'>
          <h1 className='text-4xl font-bold md:text-4xl md:font-bold lg:text-4xl lg:font-bold'>
            Introduces skilled lawyers to help for all your legal needs
          </h1>
          <div className='introduce-skild mt-10'>
            <p className='p-4 font-serif font-semibold text-slate-500'>
              Proident culpa officia deserunt mollit animd laborum perspicia
              natus error voluptatem qui acusantium dolore laudan.
            </p>
          </div>
        </div>

        <div className='mt-8 md:mt-10 lg:w-[600px] lg:ml-10 lg:mt-0'>
          <p className=' text-slate-500'>
            Labore et dolore magna aliqu. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit kind voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatas non proident, sunt in culpa qui officia deserunt.
            Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis ety quasi architecto beatae vitae dicta sunt
            explicabo nemo enim.
          </p>
          <p className='mt-10 font-semibold'>Advocate jone doe</p>
          <p className='mt-4'>FOUNDER & SENIOR LAWYER</p>
        </div>
      </div>
    </div>
  )
}

export default Introduce