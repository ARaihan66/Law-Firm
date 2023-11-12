import React from 'react'
import corporateligation from '../../../../assets/caseLigation.png'
const Ligation = () => {
  return (
    <div>
      {' '}
      <div className='p-10 case-evaluation'>
        <div className='flex items-center justify-center mb-6'>
          <img
            src={corporateligation}
            alt='Free case evaluation'
            className='rounded w-30 h-30  bg-gray-200 lg:w-30 lg:h-30'
          />
        </div>
        <h2 className='font-bold text-2xl text-center text-navyblue'>
          CORPORATE LIGITATION
        </h2>
        <p className='text-justify mt-5 '>
          At Mustafizur Rahman & Associates, we understand that facing legal
          challenges can be a daunting experience. That's why we are pleased to
          offer a free initial consultation to prospective clients. Our aim is
          to provide you with an opportunity to discuss your legal concerns,
          understand your rights, and explore potential solutions without any
          financial obligation. During this consultation, our experienced legal
          team will attentively listen to your case, assess its merits, and
          provide preliminary guidance on the best course of action. Whether
          you're dealing with family law issues, criminal matters, corporate
          disputes, or any other legal concerns, our dedicated attorneys are
          here to assist you.
        </p>

        <p className='text-justify mt-3'>
          We believe that access to legal counsel should be readily available,
          and our commitment to a free initial consultation is one way we strive
          to make quality legal assistance accessible to all. Our team is
          dedicated to providing you with the information and support you need
          to make informed decisions about your legal matters.Get in touch with
          us today to schedule your complimentary consultation and take the
          first step toward resolving your legal issues. We are here to guide
          you through the legal process, answer your questions, and help you
          find the best path forward. Your peace of mind and confidence in your
          legal representation are of the utmost importance to us.
        </p>
      </div>
    </div>
  )
}

export default Ligation