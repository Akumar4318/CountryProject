import React from 'react'
import Header from '../../UI/Header'
import Fotter from '../../UI/Fotter'
import { Outlet } from 'react-router-dom'

const Applayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Fotter/>
    </div>
  )
}

export default Applayout