import React from 'react'
import Header from '../blocks/Header'
import Footer from '../blocks/Footer'
import {Outlet} from "react-router-dom"

const Home = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Home