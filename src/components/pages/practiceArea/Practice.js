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
      btnName: 'More Details',
    },
    {
      img: personalInjury,
      name: 'Personal Injury',
      details:
        'Sit amet, consectetur adipisicing elit por incididunt ut labore et dolore ma gna alin veniam,quis.',
      btnName: 'More Details',
    },
    {
      img: CriminalLaws,
      name: 'Criminal Laws',
      details:
        'Sit amet, consectetur adipisicing elit por incididunt ut labore et dolore ma gna alin veniam,quis.',
      btnName: 'More Details',
    },
    {
      img: healthLaw,
      name: 'Health Related Laws',
      details:
        'Sit amet, consectetur adipisicing elit por incididunt ut labore et dolore ma gna alin veniam,quis.',
      btnName: 'More Details',
    },
    {
      img: DomesticVoilence,
      name: 'Domestic Voilence',
      details:
        'Sit amet, consectetur adipisicing elit por incididunt ut labore et dolore ma gna alin veniam,quis.',
      btnName: 'More Details',
    },
    {
      img: CorporateIssues,
      name: 'Corporate Issues',
      details:
        'Sit amet, consectetur adipisicing elit por incididunt ut labore et dolore ma gna alin veniam,quis.',
      btnName: 'More Details',
    },
  ]

  return (
    <div>
      <div className='practice-back practice-content'>
        <div>
          <p className='text-orange-400 text-xl font-medium text-center'>
            Most Successful Law Firm
          </p>
          <h1 className='text-orange-400 text-4xl  md:text-6xl md:font-bold lg:text-6xl lg:font-bold'>
            Practice Areas
          </h1>
        </div>
      </div>
      <div className='p-10 mx-auto my-0  lg:w-[1200px]'>
        <div>
          <h1 className='text-center text-xl font-semibold text-gray-800'>
            Proident sunt culpa officia deserunt mollit animd laborum perspicia
            natus qui acusantium
          </h1>
          <p className='text-center text-gray-800 mt-6'>
            Labore et dolore magna aliqu. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco dui laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor reprehenderit kind voluptate velit
            esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat
            cupidatas non proident sunt culpa qui officia deserunt doloremque
            laudantium totam rem aperiam eaque ipsa quae ab illo.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-10'>
            {practiceAreas.map((practiceArea, i) => (
              <OnePractice key={i} practiceArea={practiceArea} />
            ))}
          </div>
        </div>
      </div>
      <PracticeSolution/>
      <ExpertLawer/>
    </div>
  )
}

export default Practice
