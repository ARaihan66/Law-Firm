import React from 'react'
import './question.css'
import SingleQuestion from './SingleQuestion'
const QuestionAns = () => {
  const questionsAns = [
    {
      question:
        'What is the role of each of the following entities in the overall system of administrative law: executive, legislative, and judicial?',
      ans: 'Administrative law refers to the body of law that governs the activities and operations of administrative agencies and the relationship between these agencies and the general public. It encompasses the legal principles, rules, and procedures that guide the decision-making, rulemaking, and enforcement powers of administrative bodies.',
    },
    {
      question:
        'What is the role of each of the following entities in the overall system of administrative law: executive, legislative, and judicial?',
      ans: 'Administrative law refers to the body of law that governs the activities and operations of administrative agencies and the relationship between these agencies and the general public. It encompasses the legal principles, rules, and procedures that guide the decision-making, rulemaking, and enforcement powers of administrative bodies.',
    },
    {
      question:
        'What is the role of each of the following entities in the overall system of administrative law: executive, legislative, and judicial?',
      ans: 'Administrative law refers to the body of law that governs the activities and operations of administrative agencies and the relationship between these agencies and the general public. It encompasses the legal principles, rules, and procedures that guide the decision-making, rulemaking, and enforcement powers of administrative bodies.',
    },
    {
      question:
        'What is the role of each of the following entities in the overall system of administrative law: executive, legislative, and judicial?',
      ans: 'Administrative law refers to the body of law that governs the activities and operations of administrative agencies and the relationship between these agencies and the general public. It encompasses the legal principles, rules, and procedures that guide the decision-making, rulemaking, and enforcement powers of administrative bodies.',
    },
    {
      question:
        'What is the role of each of the following entities in the overall system of administrative law: executive, legislative, and judicial?',
      ans: 'Administrative law refers to the body of law that governs the activities and operations of administrative agencies and the relationship between these agencies and the general public. It encompasses the legal principles, rules, and procedures that guide the decision-making, rulemaking, and enforcement powers of administrative bodies.',
    },
    {
      question:
        'What is the role of each of the following entities in the overall system of administrative law: executive, legislative, and judicial?',
      ans: 'Administrative law refers to the body of law that governs the activities and operations of administrative agencies and the relationship between these agencies and the general public. It encompasses the legal principles, rules, and procedures that guide the decision-making, rulemaking, and enforcement powers of administrative bodies.',
    },
    
  ]
  return (
    <div>
       <h1 className='text-3xl text-center font-bold mt-16 md:text-3xl md:font-bold lg:text-3xl lg:font-bold'>
       FAQ,S
      </h1>
      <div className='px-10 mt-10 h-[600px] overflow-y-auto'>
        {questionsAns.map((questionans, i) => (
          <SingleQuestion key={i} i={i} questionans={questionans} />
        ))}
      </div> 
    </div>
  )
}

export default QuestionAns
