import React from 'react'
import { NavBar } from './NavBar'
import './Header.scss'
import './Header.css'

export const Header = () => {
  return (
    <div>
        <div className='heading'>
          <div className='head-container'>
          <h1 className='animated-header'>Covid</h1>
          <div className='logo'>19</div>           
          </div>
          <label className='heading-label2'>Covid-19 Statistics</label>            
          <label className='gloomy-text'>A website to provide you with all statics around the world</label>            
        </div>
        <NavBar />
    </div>
  )
}
