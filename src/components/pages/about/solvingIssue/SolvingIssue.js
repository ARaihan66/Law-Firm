import React from 'react'
import aboutimg from '../../../../assets/about-pic.jpg'

import './solving.css'
const SolvingIssue = () => {
  return (
    <div className='flex justify-around flex-wrap md:flex-nowrap items-center p-4'>
      <div className='mt-6 md:mt-6'>
        <img src={aboutimg} alt='' className='rounded-lg' />
      </div>
      <div className='md:ml-10 my-5'>
        <h1 className='text-2xl mt-2 font-bold md:font-bold lg:font-bold text-navyblue uppercase'>
          ABOUT MUSTAFIZUR RAHMAN & ASSOCIATES
        </h1>
        <p className='text-justify mt-4'>
          Mustafizur Rahman & Associates is one of the Top law firm in Dhaka,
          Bangladesh offering full service with specialization in corporate,
          commercial and investment legal practice. The main area of Practice of
          the Firm in Corporate Law, Commercial Documentations, Foreign Direct
          Investment, Labour Laws, Commercial Litigation, Energy Disputes,
          Taxation, Construction Adjudication & General Litigation. This Law
          Firm consists of experienced lawyers and consultants, providing
          one-stop solutions to the clients. Which provides one of the Best
          legal services within Bangladesh. The Firm also works with a number of
          Chartered Accountant Firms and Tax Advisors to provide one-stop
          solutions to the Client. The ability to appreciate the clients’ needs
          and deliver services that meet and, where possible, exceed their
          expectations is vital for the continued strength of the Firm’s
          business and growth. Jural Acuity is a member firm of IR Global in
          Dhaka, Bangladesh and is also the Member Firm (Bangladesh) for the
          Privacy Group. Jural Acuity law firm also collaborates with tax
          practitioners and Chartered Accountants to provide additional services
          including corporate tax advisory services, company registration,
          business licensing services, HR dispute resolution, claim settlements,
          etc.
        </p>
      </div>
    </div>
  )
}

export default SolvingIssue
