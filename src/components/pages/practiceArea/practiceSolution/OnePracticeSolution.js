import React from 'react'
import { Link } from 'react-router-dom'
import './practiceSolution.css'
const OnePracticeSolution = (props) => {
 const { image ,name} = props.practiceslution
  return (
    <div>
      <Link>
        <div className='ml-4 mt-3 md:mt-3 solution'>
          <img src={image} alt='' className='p-1' />
          <h1 className='text-center text-xl pt-3 pb-3 font-bold solutionhover'>
            {name}
          </h1>
        </div>
      </Link>
    </div>
  )
}

export default OnePracticeSolution