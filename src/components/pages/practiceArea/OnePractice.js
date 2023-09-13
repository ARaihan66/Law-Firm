import React from 'react'
import { Link } from 'react-router-dom'
import './practice.css'
const OnePractice = (props) => {
 const {img ,details,name,btnName}=props.practiceArea
  return (
    <div>
      <div className='flex flex-col md:flex-row lg:flex-row'>
        <img src={img} alt='' className=' w-[100px] h-[100px] mt-2' />
        <div className='practice md:ml-[20px] lg:ml-[20px]'>
          {' '}
          <h1 className='text-[22px] font-medium '>{name}</h1>
          <p className='text-gray-600 mt-1'>{details}</p>
          <Link>
            <button className='onePractice-btn mt-5'>{btnName}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OnePractice