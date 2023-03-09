import React, { useContext } from "react";
import { Context } from "../context/Context";

export const DataCountry = () => {
    const {handleSearch} = useContext(Context);
    return (
    <div className="container">
      <h3 className="country-heading">Get Statics for a certain country</h3>
      <div className="from-container">
        <form className="country-form" onSubmit={handleSearch}>
          <input required className="text-input" id='country' type="text" placeholder="Country" />
          <input required className="text-input" id="fromDate" type="date" />
          <input required className="text-input" id='toDate' type="date" />
          <button className="search-country">Search</button>
        </form>
      </div>
    </div>
  );
};
