import React from 'react'
import './home.css'
import slider1 from '../../../assets/slider1.jpg'
import slider2 from '../../../assets/slider2.webp'
import slider3 from '../../../assets/slider3.jpg'
import { Link } from 'react-router-dom'
import Introduce from './introduces/Introduce'
import Case from './case/Case'
import Casesolve from './caseSolve/Casesolve'
import QuestionAns from './QuestionOption/QuestionAns'
import Testimonial from './Testimonial/Testimonial'



const Home = () => {
  return (
    <div>
      <div className='relative'>
        <div
          className='absolute z-10 top-10 left-2 p-2  md:top-1/3 md:left-20 md:w-[500px] 
          lg:top-1/3 lg:left-28 lg:w-[850px]'
        >
          <p className='text-amber-500 md: text-xl lg:text-xl font-medium'>
            Most Successful Law Firm
          </p>
          <h1 className='text-amber-500 text-3xl mt-4 font-bold md:text-5xl lg:text-6xl lg:font-medium lg:mt-3'>
            Effective Legal Solutions
          </h1>
          <p className='text-amber-500 text-justify mt-4 md:text-justify lg:text-xl lg:font-medium lg:mt-3 lg:text-justify'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
            necessitatibus quibusdam corporis quia eveniet sed consequatur
            mollitia nesciunt.
          </p>
          <Link>
            <button className='home-btn mt-5'>Get the Lawer</button>
          </Link>
        </div>
        <div className='carousel w-full'>
          <div
            id='slide1'
            className='carousel-item relative w-full overflow-hidden'
          >
            <img
              src={slider1}
              alt=''
              className='w-full object-cover h-[700px]'
            />
            <div className='absolute flex justify-between transform -translate-y-1/2 top-[450px] left-32  md:left-5 md:right-5 md:top-1/2 lg:left-5 lg:right-5 lg:top-1/2 '>
              <a href='#slide4' className='btn btn-circle '>
                ❮
              </a>
              <a href='#slide2' className='btn btn-circle ml-3'>
                ❯
              </a>
            </div>
          </div>
          <div
            id='slide2'
            className='carousel-item relative w-full overflow-hidden'
          >
            <img
              src={slider2}
              alt=''
              className='w-full object-cover h-[700px]'
            />
            <div className='absolute flex justify-between transform -translate-y-1/2 top-[450px] left-32  md:left-5 md:right-5 md:top-1/2 lg:left-5 lg:right-5 lg:top-1/2'>
              <a href='#slide1' className='btn btn-circle'>
                ❮
              </a>
              <a href='#slide3' className='btn btn-circle ml-3'>
                ❯
              </a>
            </div>
          </div>
          <div
            id='slide3'
            className='carousel-item relative w-full overflow-hidden'
          >
            <img
              src={slider3}
              alt=''
              className='w-full object-cover h-[700px]'
            />
            <div className='absolute flex justify-between transform -translate-y-1/2 top-[450px] left-32  md:left-5 md:right-5 md:top-1/2 lg:left-5 lg:right-5 lg:top-1/2'>
              <a href='#slide2' className='btn btn-circle'>
                ❮
              </a>
              <a href='#slide4' className='btn btn-circle ml-3'>
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <Introduce></Introduce>
      <Case />
      <Casesolve />
       <QuestionAns/> 
       <Testimonial></Testimonial>
     
    </div>
  )
}

export default Home
