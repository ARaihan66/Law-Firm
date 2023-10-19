import React from 'react'
import './question.css'

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'
function Icon({ id, open }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
      />
    </svg>
  )
}
 
const QuestionAns = () => {
  const [open, setOpen] = React.useState(null)

  const handleOpen = (value) => setOpen(open === value ? null : value)

  const questionsAns = [
    {
      id: 1,
      question:
        'What is the role of each of the following entities in the overall system of administrative law: executive, legislative, and judicial?',
      ans: 'Administrative law refers to the body of law that governs the activities and operations of administrative agencies and the relationship between these agencies and the general public. It encompasses the legal principles, rules, and procedures that guide the decision-making, rulemaking, and enforcement powers of administrative bodies.',
    },
    {
      id: 2,
      question:
        'What is the role of each of the following entities in the overall system of administrative law: executive, legislative, and judicial?',
      ans: 'Administrative law refers to the body of law that governs the activities and operations of administrative agencies and the relationship between these agencies and the general public. It encompasses the legal principles, rules, and procedures that guide the decision-making, rulemaking, and enforcement powers of administrative bodies.',
    },
    {
      id: 3,
      question:
        'What is the role of each of the following entities in the overall system of administrative law: executive, legislative, and judicial?',
      ans: 'Administrative law refers to the body of law that governs the activities and operations of administrative agencies and the relationship between these agencies and the general public. It encompasses the legal principles, rules, and procedures that guide the decision-making, rulemaking, and enforcement powers of administrative bodies.',
    },
    {
      id: 4,
      question:
        'What is the role of each of the following entities in the overall system of administrative law: executive, legislative, and judicial?',
      ans: 'Administrative law refers to the body of law that governs the activities and operations of administrative agencies and the relationship between these agencies and the general public. It encompasses the legal principles, rules, and procedures that guide the decision-making, rulemaking, and enforcement powers of administrative bodies.',
    },
    {
      id: 5,
      question:
        'What is the role of each of the following entities in the overall system of administrative law: executive, legislative, and judicial?',
      ans: 'Administrative law refers to the body of law that governs the activities and operations of administrative agencies and the relationship between these agencies and the general public. It encompasses the legal principles, rules, and procedures that guide the decision-making, rulemaking, and enforcement powers of administrative bodies.',
    },
  ]
  
  return (
    <div className='mt-20'>
      <h1 className='text-3xl text-center font-bold md:font-bold lg:font-bold text-navyblue uppercase'>
        FAQ'S
      </h1>
      <div className='px-4 md:px-20 mt-10'>
        {questionsAns.map((questionans, i) => (
          <>
            <Accordion
              key={i}
              open={open === i}
              icon={<Icon id={i} open={open} />}
              className='mb-2 rounded-lg border border-blue-gray-100 px-4'
            >
              <AccordionHeader
                onClick={() => handleOpen(i)}
                className={`border-b-0 transition-colors ${
                  open === i ? 'text-blue-500 hover:!text-blue-700' : ''
                }`}
              >
                {questionans.question}
              </AccordionHeader>
              <AccordionBody className='pt-0 text-base font-normal'>
                <p className='single-Question-Hover p-2 text-[18px]'>
                  {questionans.ans}
                </p>
              </AccordionBody>
            </Accordion>
          </>
        ))}
      </div>
    </div>
  )
}

export default QuestionAns
