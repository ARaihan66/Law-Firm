import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { AiOutlineRead } from 'react-icons/ai'
import { FaPenToSquare } from 'react-icons/fa6'
import { FaLeaf } from 'react-icons/fa'

import 'react-circular-progressbar/dist/styles.css'
import './innovative.css'
const Innovative = () => {
  let userValue = 50
  const value = userValue / 100
  let userValue1 = 70
  const value1 = userValue1 / 100
  let userValue2 = 60
  const value2 = userValue2 / 100
  return (
    <div>
      <div className='innovative-background1 p-28 mt-20'>
        <div className='flex flex-wrap justify-center'>
          <div className='mt-4'>
            <div style={{ width: 150, height: 150 }}>
              <CircularProgressbar
                value={value}
                maxValue={1}
                text={`${value * 100}%`}
                styles={buildStyles({
                  textSize: '25px',
                  textWeight: '900',
                  pathColor: `rgb(255 193 7)`,
                  textColor: 'white',
                  trailColor: 'white',
                  pathTransitionDuration: 0.5,
                })}
              />
            </div>
            <p className='text-center mt-4 md:mt-3 lg:mt-3 font-medium'>
              LEGAL SOLUTIONS
            </p>
          </div>
          <div className='ml-8 mt-4'>
            {' '}
            <div style={{ width: 150, height: 150 }}>
              <CircularProgressbar
                value={value1}
                maxValue={1}
                text={`${value1 * 100}%`}
                styles={buildStyles({
                  textSize: '25px',
                  textWeight: '900',
                  pathColor: `rgb(255 193 7)`,
                  textColor: 'white',
                  trailColor: 'white',
                  pathTransitionDuration: 0.5,
                })}
              />
            </div>
            <p className='text-center mt-4 md:mt-3 lg:mt-3 font-medium'>
              LEGAL SOLUTIONS
            </p>
          </div>
          <div className='ml-8 mt-4'>
            <div style={{ width: 150, height: 150 }}>
              <CircularProgressbar
                value={value2}
                maxValue={1}
                text={`${value2 * 100}%`}
                styles={buildStyles({
                  textSize: '25px',
                  textWeight: '900',
                  pathColor: `rgb(255 193 7)`,
                  textColor: 'white',
                  trailColor: 'white',
                  pathTransitionDuration: 0.5,
                })}
              />
            </div>
            <p className='text-center mt-4 md:mt-3 lg:mt-3 font-medium'>
              LEGAL SOLUTIONS
            </p>
          </div>
        </div>
        <h1 className='text-xl md:text-3xl mt-14 font-bold  text-amber-500 uppercase md:text-center mb-10'>
          Skilled Lawyers at Help With a Clear Mission
        </h1>
      </div>
    </div>
  )
}

export default Innovative
