import React from 'react'
import './practice.css'
import realStae from '../../../assets/realState.jpg'
import personalInjury from '../../../assets/personal injury.jpg'
import CriminalLaws from '../../../assets/Criminal-Law.jpg'
import healthLaw from '../../../assets/health-care-law.avif'
import DomesticVoilence from '../../../assets/domesticViolence.jpg'
import CorporateIssues from '../../../assets/corporateIssue.jpg'
import OnePractice from './OnePractice'
import PracticeSolution from './practiceSolution/PracticeSolution'
import ExpertLawer from './expertLawer/ExpertLawer'
const Practice = () => {
  const practiceAreas = [
    {
      img: realStae,
      name: 'Real Estate Laws',
      details:
        'Sit amet, consectetur adipisicing elit por incididunt ut labore et dolore ma gna alin veniam,quis.',
     
    },
    {
      img: personalInjury,
      name: 'Personal Injury',
      details:
        'Sit amet, consectetur adipisicing elit por incididunt ut labore et dolore ma gna alin veniam,quis.',
     
    },
    {
      img: CriminalLaws,
      name: 'Criminal Laws',
      details:
        'Sit amet, consectetur adipisicing elit por incididunt ut labore et dolore ma gna alin veniam,quis.',
    
    },
    {
      img: healthLaw,
      name: 'Health Related Laws',
      details:
        'Sit amet, consectetur adipisicing elit por incididunt ut labore et dolore ma gna alin veniam,quis.',
     
    },
    {
      img: DomesticVoilence,
      name: 'Domestic Voilence',
      details:
        'Sit amet, consectetur adipisicing elit por incididunt ut labore et dolore ma gna alin veniam,quis.',
     
    },
    {
      img: CorporateIssues,
      name: 'Corporate Issues',
      details:
        'Sit amet, consectetur adipisicing elit por incididunt ut labore et dolore ma gna alin veniam,quis.',
     
    },
  ]

  return (
    <div>
      <div className='practice-back relative practice-content'>
        <div className='z-20'>
          <p className='text-amber-500 md:text-xl font-medium uppercase'>
            Most Successful Law Firm
          </p>
          <h1 className='text-amber-500 text-3xl mt-4 font-bold md:text-5xl lg:text-6xl lg:font-medium lg:mt-3 uppercase'>
            Services Areas
          </h1>
        </div>
        <div className='absolute z-10 top-0 h-[100%] w-full bg-black/70'></div>
      </div>
      <div className='p-10 mx-auto my-0  lg:w-[1200px]'>
        <div className='mt-20'>
          <h1 className='text-3xl mt-4 font-bold md:font-bold lg:font-bold text-navyblue uppercase'>
            Proident sunt culpa officia deserunt mollit animd laborum perspicia
            natus qui acusantium
          </h1>
          <p className='text-gray-800 my-10'>
            Labore et dolore magna aliqu. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco dui laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor reprehenderit kind voluptate velit
            esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat
            cupidatas non proident sunt culpa qui officia deserunt doloremque
            laudantium totam rem aperiam eaque ipsa quae ab illo.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-y-28 md:mt-20'>
            {practiceAreas.map((practiceArea, i) => (
              <OnePractice key={i} practiceArea={practiceArea} />
            ))}
          </div>
        </div>
      </div>
      <PracticeSolution />
      <ExpertLawer />
    </div>
  )
}

export default Practice
