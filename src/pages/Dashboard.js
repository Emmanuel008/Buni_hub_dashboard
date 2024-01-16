import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
const Dashboard = () => {
  return (
    <>
     <Header/> 
     <Sidebar/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default Dashboard
