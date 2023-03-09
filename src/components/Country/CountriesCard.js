import axios from "axios";
import React from "react";
const Swal = require('sweetalert2')


export const Cards = ({
  country,
  cases,
  date,
  death,
  recovered,
}) => {
  const handleAdd = async (country, date) => {
    console.log(country,date);
    const record = {
      country: country,
      date: date,
    };

    await axios
      .post(`${process.env.REACT_APP_LOCAL_SERVER}/record`,record)
      .then((resolve) => {
        Swal.fire({
                  title: 'Country has been added to records!',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      }
      )
  };
  return (
    <div className="country-card-container">
      <div className="dummy">''</div>
      <div className="country-data-container">
        <label className="country-label">Country: {country}</label>
        <label>Total Confirmed cases: {cases}</label>
        <label>Total Deaths cases: {death}</label>
        <label>Total Recovered cases: {recovered}</label>
        <label className="date-label">Date: {date}</label>
        <button
          className="add-records"
          onClick={() => handleAdd(country, date)}
        >
          ADD TO MY RECORDS
        </button>
      </div>
    </div>
  );
};
