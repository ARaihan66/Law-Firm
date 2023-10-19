import React from 'react'
import './home.css'
import slider1 from '../../../assets/slider1.jpg'
import slider2 from '../../../assets/slider2.webp'
import slider3 from '../../../assets/slider3.jpg'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Introduce from './introduces/Introduce'
import Case from './case/Case'
import Casesolve from './caseSolve/Casesolve'
import QuestionAns from './QuestionOption/QuestionAns'
import Testimonial from './Testimonial/Testimonial'

const Home = () => {
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div>
      <div className='relative'>
        <div
          className='absolute z-20 top-10 left-2 p-2  md:top-1/3 md:left-20 md:w-[500px] 
          lg:top-1/3 lg:left-28 lg:w-[850px]'
        >
          <p className='text-amber-500 md:text-xl font-medium uppercase'>
            Most Successful Law Firm
          </p>
          <h1 className='text-amber-500 text-3xl mt-4 font-bold md:text-5xl lg:text-6xl lg:font-medium lg:mt-3 uppercase'>
            Effective Legal Solutions
          </h1>
        </div>
        <div className='absolute z-10 top-0 h-[100%] w-full bg-black/70'></div>
        <div className='w-[100%] h-[300px] md:h-[700px]'>
          <Slider {...settings} className='overflow-hidden'>
            <div className='h-[300px] md:h-[700px]'>
              <img
                src={slider1}
                alt=''
                className='w-[100%] h-[100%] md:h-[100%] object-cover'
                srcset=''
              />
            </div>
            <div className='h-[300px] md:h-[700px]'>
              <img
                src={slider2}
                alt=''
                className='w-[100%] h-[100%] md:h-[100%] object-cover'
                srcset=''
              />
            </div>
            <div className='h-[300px] md:h-[700px]'>
              <img
                src={slider3}
                alt=''
                className='w-[100%] h-[100%] md:h-[100%] object-cover'
                srcset=''
              />
            </div>
          </Slider>
        </div>
      </div>
      <Introduce></Introduce>
      <Case />
      <Casesolve />
      <QuestionAns />
      <Testimonial></Testimonial>
    </div>
  )
}

export default Home
