 import axios from 'axios'
import React, { useEffect, useState } from 'react'

 
 export const DataCards = () => {
    const [statics, setStatics] = useState({});
    useEffect(() => {
        console.log('test');
        axios.get(process.env.REACT_APP_STATICS).then(resolve => setStatics(prev => prev = resolve.data))
        .catch(rejected => setStatics(prev => prev = rejected));
    },[])
   return (
     <div className='main-container'>
        <div className='statics-container'>
        <label className='statics'>Total Confirmed: {statics.TotalConfirmed}</label>
        <label className='statics'>Total Deaths: {statics.TotalDeaths}</label>
        <label className='statics'>Total Recoverd: {statics.TotalRecovered}</label>
        </div>
     </div>
   )
 }
 