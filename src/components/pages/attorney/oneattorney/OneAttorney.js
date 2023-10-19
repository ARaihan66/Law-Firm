import React from 'react'

const OneAttorney = (props) => {
  const { img, name, desig } = props.attorney
  return (
    <div className='attorneyshadow'>
      <div>
        <img src={img} alt='' className='w-[100%]' />
        <h1 className='text-center text-xl mt-4 font-medium'>{name}</h1>
        <p className='text-center pb-3'>{desig}</p>
      </div>
    </div>
  )
}

export default OneAttorney
