import React from 'react'
import Header from '../components/repatePages/firstHeader/Header'
import Navbar from '../components/repatePages/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/repatePages/footer/Footer'

const Main = () => {
  return (
    <div>
     <Header/>
     <Navbar/>
     <Outlet></Outlet>
     <Footer/>
    </div>
  )
}

export default Main