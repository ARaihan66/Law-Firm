import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import {NavLink } from 'react-router-dom'
import lawIcon from '../../../assets/law-icon.png'
import { AiOutlineClose } from 'react-icons/ai'
import './navbar.css'
const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className='py-3 pl-6 pr-6'>
      <section className='container mx-auto flex justify-between items-center relative nav-large'>
        <div>
          <NavLink to='/'>
            <img
              src={lawIcon}
              alt=''
              srcset=''
              className='w-[100px] h-[70px]'
            />
          </NavLink>
        </div>
        <div>
          {/* destop view  */}
          <div className='hidden lg:flex gap-4'>
            <NavLink
              to='/'
              className='font-medium text-xl text-slate-700 mr-4 '
            >
              Home
            </NavLink>

            <NavLink
              to='/about'
              className='font-medium text-xl text-slate-700 mr-4 '
            >
              About
            </NavLink>

            <NavLink
              to='/practice'
              className='font-medium text-xl text-slate-700 mr-4 '
            >
              Practice Areas
            </NavLink>

            <NavLink
              to='/attorney'
              className='font-medium text-xl text-slate-700 mr-4 '
            >
              Attorneys
            </NavLink>

            <NavLink
              to='/contact'
              className='font-medium text-xl text-slate-700 mr-4 '
            >
              Contact
            </NavLink>
          </div>
          {/* tablet view  */}
          <div className='flex gap-4'>
            <div className='lg:hidden'>
              {open ? (
                <AiOutlineClose
                  className='cursor-pointer icon mr-8'
                  onClick={() => setOpen(!open)}
                />
              ) : (
                <FaBars
                  className='cursor-pointer icon mr-8'
                  onClick={() => setOpen(!open)}
                />
              )}
            </div>
            {open && (
              <div className='flex flex-col gap-4 absolute nav-large md:left-0 bg-color w-[100%] nav-small nav-large top-20 lg:hidden'>
                <>
                  <NavLink
                    to='/'
                    className='font-medium text-xl text-slate-700  left-2 ml-3'
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to='/about'
                    className='font-medium text-xl text-slate-700  left-2 ml-3'
                  >
                    About
                  </NavLink>

                  <NavLink
                    to='/practice'
                    className='font-medium text-xl text-slate-700  left-2 ml-3'
                  >
                    Practice Areas
                  </NavLink>

                  <NavLink
                    to='/attorney'
                    className='font-medium text-xl text-slate-700  left-2 ml-3'
                  >
                    Attorneys
                  </NavLink>

                  <NavLink
                    to='/contact'
                    className='font-medium text-xl left-2 ml-3 text-slate-700 mb-2 '
                  >
                    Contact
                  </NavLink>
                </>
              </div>
            )}
          </div>
        </div>
      </section>
    </nav>
  )
}

export default Navbar
