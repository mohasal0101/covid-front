import React from 'react'

export const CountryCard = ({ date, cases}) => {
  return (
    <div className='card-container'>
        <div className='dummy-div'>''</div>
        <div className='data-container'>
        <label className='data-country'>Date: {date}</label>
        <label className='cases-country'>Number of Confirmed cases: {cases}</label>
        </div>
    </div>
  )
}
