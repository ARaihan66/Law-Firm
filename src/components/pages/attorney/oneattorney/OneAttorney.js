import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import './oneattorney.css'
const OneAttorney = (props) => {
  const { img, name, desig, email, phone } = props.attorney
  return (
    <div>
      <div className='lg:w-[290px] relative z-10 attorney-show'>
        <Link>
          <div>
            <img src={img} alt='' className='w-[100%]' />
            <h1 className='text-center text-xl mt-4 font-medium'>{name}</h1>
            <p className='text-center pb-3'>{desig}</p>
            <div className='absolute w-[100%] h-[253px] md:h-[363px] lg:h-[306px] attorneyOne-back attorney-block top-0 flex justify-center '>
              <div className='mt-[100px]'>
                <div className='flex justify-center'>
                  {' '}
                  <Link>
                    <FaFacebookSquare className='w-[20px] h-[25px] attorneyIon text-white' />
                  </Link>
                  <Link>
                    <FaLinkedin className='w-[20px] h-[25px] ml-2 attorneyIon text-white' />
                  </Link>
                </div>
                <div className='mt-2'>
                  <p className='text-center font-semibold text-white attorneyIon'>
                    Email : {email}
                  </p>
                  <p className='text-center font-semibold text-white attorneyIon'>
                    Phone : {phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default OneAttorney
