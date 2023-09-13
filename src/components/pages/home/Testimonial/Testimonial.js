import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import t1 from '../../../../assets/t1.png'
import t2 from '../../../../assets/t2.png'
import t3 from '../../../../assets/t3.png'
import t4 from '../../../../assets/t4.png'
import 'swiper/css'
import './testimonial.css'
const Testimonial = () => {
  const customers = [
    {
      img: t1,
      description:
        'Everyone at MD Infotech are such a pleasure to work for. There very accommodating as far as hours are concerned and work with you on a personal level.',
      Name: 'Jose J. Crosss',
    },
    {
      img: t2,
      description:
        'I been surprised with the turnaround from MD Infotech. Super professional & cooperative. True delighted to work with MD Infotech.',
      Name: 'Vanna Thomas',
    },
    {
      img: t3,
      description:
        'Great service...I did not have any ideas on how to get started and seller patiently worked with me through the plan to use again in future.',
      Name: 'Leroy P. King',
    },
    {
      img: t4,
      description:
        'They Did incredible work! Super fast. Easy to communicate with. Highly recommend and plan to use again in future.',
      Name: 'Hubert H. Henderson',
    },
    {
      img: t4,
      description:
        'They Did incredible work! Super fast. Easy to communicate with. Highly recommend and plan to use again in future.',
      Name: 'Hubert H. Henderson',
    },
    {
      img: t4,
      description:
        'They Did incredible work! Super fast. Easy to communicate with. Highly recommend and plan to use again in future.',
      Name: 'Hubert H. Henderson',
    },
    {
      img: t4,
      description:
        'They Did incredible work! Super fast. Easy to communicate with. Highly recommend and plan to use again in future.',
      Name: 'Hubert H. Henderson',
    },
    {
      img: t4,
      description:
        'They Did incredible work! Super fast. Easy to communicate with. Highly recommend and plan to use again in future.',
      Name: 'Hubert H. Henderson',
    },
    {
      img: t4,
      description:
        'They Did incredible work! Super fast. Easy to communicate with. Highly recommend and plan to use again in future.',
      Name: 'Hubert H. Henderson',
    },
  ]
  return (
    <div className='pt-8 testimonila-background1'>
      <h1 className='text-5xl font-semibold text-center text-black'>
        Words Form Clients
      </h1>
      <div
        className=' rounded testimonial-swiper testimonila-background  w-[300px] md:w-[770px] lg:w-[1200px]'
        id='testimonial'
      >
        <div>
          <div className='mt-10 cursor-grabbing p-6 rounded'>
            <Swiper
              spaceBetween={50}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                375: {
                  slidesPerView: 1,
                },
                767: {
                  slidesPerView: 1,
                },
                1200: {
                  slidesPerView: 2,
                },
              }}
            >
              {customers.map((customer, i) => (
                <SwiperSlide key={i}>
                  <div className='card bg-base-100 shadow-xl p-4'>
                    <figure className=''>
                      <img
                        src={customer.img}
                        alt=''
                        className='rounded-xl w-[170px]'
                      />
                    </figure>
                    <div className='card-body items-center text-center'>
                      <p className='text-justify'>{customer.description}</p>
                      <div className='card-actions'>
                        <h2 className='font-bold'>{customer.Name}</h2>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className='testimonial-commentSection'>
        <form
          className='testimonial-form md:w-[700px] lg:md:w-[700px] p-10'
          action=''
        >
          <h1 className='font-semibold text-xl uppercase text-white pb-4'>
            Leave Us a Comment
          </h1>
          <input className='p-2' type='file' name='' id='' />
          <input className='mt-4 p-2' type='text' placeholder='Your Name' />
          <textarea
            className='mt-4 p-2'
            placeholder='Put Your Comment Here'
          ></textarea>
          <div className='commentbtn1 '>
            <input
              className='comment-submit mt-4 p-2 w-[100%]'
              type='submit'
              value='Post Comment'
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Testimonial
