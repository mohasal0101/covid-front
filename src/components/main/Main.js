import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Countries } from '../Country/Countries'
import { Home } from '../Home/Home'
import { Records } from '../Record/Records'

export const Main = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/countries' element={<Countries />} />
        <Route path='/records' element={<Records />} />
      </Routes>
    </div>
  )
}
