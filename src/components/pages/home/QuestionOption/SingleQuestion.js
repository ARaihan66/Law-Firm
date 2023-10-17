import React from 'react'
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
const SingleQuestion = (props) => {
  const { question, ans, i } = props.questionans
  const [open, setOpen] = React.useState(0)

  const handleOpen = (value) => setOpen(open === value ? 0 : value)
  return (
    <div className='p-2 '>
      <>
        <Accordion open={open === i} icon={<Icon id={i} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(i)}>
            <h1 className=' p-2 text-xl'>{question}</h1>
          </AccordionHeader>
          <AccordionBody>
            <p className='single-Question-Hover p-2 text-[18px]'>{ans}</p>
          </AccordionBody>
        </Accordion>
      </>
    </div>
  )
}

export default SingleQuestion
