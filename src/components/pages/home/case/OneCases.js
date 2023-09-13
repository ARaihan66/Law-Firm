import React from 'react'
import './case.css'
import { Link } from 'react-router-dom'
const OneCases = (props) => {
  const { pic, name, btnName,to } = props.onecase
  return (
    <div className='mt-10 mb-10 onecasecardo lg:ml-6 w-[400px] md:w-[600px] lg:w-[400px]'>
      <img src={pic} alt='' className='w-[100px] h-[100px] mx-auto my-0' />
      <h1 className='text-center font-semibold text-2xl mt-6'>{name}</h1>
      <div className='mx-auto my-0 w-[200px] mt-6'>
        <Link to={`${to}`}>
          <button className='case-btn  ml-8'>{btnName}</button>
        </Link>
      </div>
    </div>
  )
}

export default OneCases
