import React from 'react'
import { Button } from '@material-tailwind/react'
import {
 
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react'
const OneAttorney = ({ attorney }) => {
  const { imageUrl, name, experience } = attorney
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => setOpen(!open)
  return (
    <div>
      <div className='attorneyshadow'>
        <div className=''>
          <img
            src={`http://localhost:8000/` + imageUrl}
            alt=''
            className='w-[100%] object-cover'
          />
        </div>

        <div className='p-5'>
          {' '}
          <h1 className='text-xl font-medium text-navyblue'>Name : {name}</h1>
          <h3 className='mt-2.5 text-xl font-medium text-navyblue'>
            Experience : {experience}
          </h3>
          <Button
            onClick={handleOpen}
            variant='gradient'
            size='md'
            className='mt-10 w-[100%]'
          >
            Book Advocate
          </Button>
        </div>
      </div>
     
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant='text'
            color='red'
            onClick={handleOpen}
            className='mr-1'
          >
            <span>Cancel</span>
          </Button>
          <Button variant='gradient' color='green' onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  )
}

export default OneAttorney
