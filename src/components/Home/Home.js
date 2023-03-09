import React,{useContext} from 'react'
import { DataCards } from './DataCards'
import './Home.css'
import { DataCountry } from './DataCountry'
import {CountryCard} from './CountryCard'
import { Context } from '../context/Context'
export const Home = () => {
  const {records, errorMessage} = useContext( Context )
  return (
    <div className='main-home-container'>
        <DataCards />
        <DataCountry />
        <div className='card'>
        {
          records.length ? 
          records.map((item, index)=>
             <CountryCard key={index} date={item.Date} cases={item.Cases} />
             )
             
             : 
             <div className='error-container'>
             <label className='error-message'>{errorMessage}</label>
            </div>
        }
        </div>
    </div>
  )
}
