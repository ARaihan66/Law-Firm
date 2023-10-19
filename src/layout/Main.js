import React from 'react'
import Header from '../components/repatePages/firstHeader/Header'
import Navbar from '../components/repatePages/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/repatePages/footer/Footer'
import WhatsAppPhone from '../components/repatePages/WhatsAppPhone'

const Main = () => {
  return (
    <div>
      <Header />
      <div className='fixed right-2 top-1/2 z-50'>
        <WhatsAppPhone />
      </div>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  )
}

export default Main
