import React from 'react'
import phone from '../../assets/Phone (2).png'
import Whatsapp from '../../assets/whatsApp.png'

const WhatsAppPhone = () => {
  return (
    <div className='px-4'>
      <div className='flex justify-between '>
        <div className='block md:hidden'>
          <a href='tel:+8801704843884' target='blank' alt='phone'>
            <div>
              <img
                src={phone}
                alt=''
                srcset=''
                className='w-[55px] h-[55px] bg-white rounded-full'
              />
            </div>
          </a>
        </div>
        <div>
          <a
            href='http://wa.me/+8801704843884'
            target='blank'
            rel='noopener noreferrer'
            alt='whatsApp'
          >
            <div>
              <img
                src={Whatsapp}
                alt=''
                srcset=''
                className='w-[55px] h-[55px] rounded-full'
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default WhatsAppPhone
