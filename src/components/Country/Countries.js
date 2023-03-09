import React, { useEffect, useState } from "react";
import { Cards } from "./CountriesCard";
import "./Country.css";
import './Country.scss';
import axios from "axios";

export const Countries = () => {
  const [summery, setSummery] = useState([]);

  useEffect(() => {
    // fetch data from api
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => {
        setSummery(res.data.Countries);
      })
  }, []);

  
  return (
    <div className="allcountries-main-container">
      <h1 className="all">
      <span>Countries </span>Statics <span>Data</span>
      </h1>
      <div className="summery-holder">
        {summery?.length ? (
          summery.map((item, index) => (
            <Cards
              key={index}
              country={item.Country}
              cases={item.TotalConfirmed}
              death={item.TotalDeaths}
              recovered={item.TotalRecovered}
              date={item.Date}
            />
          ))
        ) : (
          <label className="error-message-countries">Getting data!</label>
        )}
      </div>
    </div>
  );
};
