import React from 'react'
import './practice.css'
const OnePractice = (props) => {
  const { img, details, name, } = props.practiceArea
  return (
    <div className='mt-10'>
      <div className='flex flex-col md:flex-row lg:flex-row'>
        <img src={img} alt='' className=' w-[100px] h-[100px] mt-2' />
        <div className='practice md:ml-[20px] lg:ml-[20px]'>
          {' '}
          <h1 className='text-[22px] font-medium '>{name}</h1>
          <p className='text-gray-600 mt-1'>{details}</p>
        </div>
      </div>
    </div>
  )
}

export default OnePractice
