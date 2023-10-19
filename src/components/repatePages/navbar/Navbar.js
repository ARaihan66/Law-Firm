import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import lawIcon from '../../../assets/law-icon.png'
import { AiOutlineClose } from 'react-icons/ai'
import './navbar.css'
const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleScroll = () => {
    setOpen(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className='sticky z-40 top-0'>
      <nav className='py-3 pl-6 pr-6 relative'>
        <section className='container mx-auto flex justify-between items-center'>
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
                Services
              </NavLink>

              <NavLink
                to='/attorney'
                className='font-medium text-xl text-slate-700 mr-4 '
              >
                Lawers
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
                <div className='flex flex-col gap-4 absolute left-0 bg-color min-h-screen min-w-[100vh] top-20 lg:hidden'>
                  <>
                    <NavLink
                      to='/'
                      className='font-medium text-xl text-slate-700 pt-3 pl-4'
                      onClick={() => setOpen(!open)}
                    >
                      Home
                    </NavLink>
                    <hr />
                    <NavLink
                      to='/about'
                      className='font-medium text-xl text-slate-700  pl-4'
                      onClick={() => setOpen(!open)}
                    >
                      About
                    </NavLink>
                    <hr />
                    <NavLink
                      to='/practice'
                      className='font-medium text-xl text-slate-700 pl-4'
                      onClick={() => setOpen(!open)}
                    >
                      Services
                    </NavLink>
                    <hr />
                    <NavLink
                      to='/attorney'
                      className='font-medium text-xl text-slate-700  pl-4'
                      onClick={() => setOpen(!open)}
                    >
                      Lawers
                    </NavLink>
                    <hr />
                    <NavLink
                      to='/contact'
                      className='font-medium text-xl text-slate-700 mb-2  pl-4'
                      onClick={() => setOpen(!open)}
                    >
                      Contact
                    </NavLink>
                    <hr />
                  </>
                </div>
              )}
            </div>
          </div>
        </section>
      </nav>
    </div>
  )
}

export default Navbar
