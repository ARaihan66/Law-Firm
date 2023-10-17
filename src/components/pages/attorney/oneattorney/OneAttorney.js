import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import './oneattorney.css'

const OneAttorney = (props) => {
  const { img, name, desig, email, phone } = props.attorney
  return (
    <div>
      <div className='relative attorney-show'>
        <div>
          <img src={img} alt='' className='w-[100%]' />
          <h1 className='text-center text-xl mt-4 font-medium'>{name}</h1>
          <p className='text-center pb-3'>{desig}</p>
          <div className='absolute z-40 top-0 h-[100%] w-full bg-black/70   attorney-block'></div>
        </div>

        <div className='absolute top-1/3 left-10 z-40 attorney-block'>
          <div className='flex justify-center'>
            <Link>
              <FaFacebookSquare className='w-[20px] h-[25px] text-white attorneyIon' />
            </Link>
            <Link>
              <FaLinkedin className='w-[20px] h-[25px] ml-2  text-white attorneyIon' />
            </Link>
          </div>
          <div className='mt-2'>
            <p className='text-center font-semibold  text-white  attorneyIon'>
              Email : {email}
            </p>
            <p className='text-center font-semibold  text-white attorneyIon'>
              Phone : {phone}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OneAttorney
