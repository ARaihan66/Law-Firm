import React from 'react'
import './case.css'
import { Link } from 'react-router-dom'
const OneCases = (props) => {
  const { pic, name, btnName,to } = props.onecase

  const handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  return (
    <div className='mt-10 mb-10 onecasecardo lg:ml-6 w-[400px] lg:w-[400px]'>
      <img src={pic} alt='' className='w-[100px] h-[100px] mx-auto my-0' />
      <h1 className='text-center font-semibold text-2xl mt-6'>{name}</h1>
      <div className='mx-auto my-0 w-[200px] mt-6'>
        <Link to={`${to}`}>
          <button className='case-btn  ml-8' onClick={handleClick}>{btnName}</button>
        </Link>
      </div>
    </div>
  )
}

export default OneCases
