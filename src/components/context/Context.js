import axios from "axios";
import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [records, setRecords] = useState([]);
  const [errMsg, setErrMsg] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    let data = {
      country: e.target.country.value,
      fromDate: e.target.fromDate.value,
      toDate: e.target.toDate.value,
    };

    axios
      .get(
        `https://api.covid19api.com/country/${data.country}/status/confirmed?from=${data.fromDate}&to=${data.toDate}`
      )
      .then((resolve) =>{
        setRecords(resolve.data)
        setErrMsg('')
      } 
      )
      .catch((rejected) => setErrMsg('No Data try to explore another country!'));
  };

  const value = {
    records,
    setRecords,
    handleSearch,
    errMsg
  };

  return (
    <Context.Provider value={value}>{children}</Context.Provider>
  );
};

export default ContextProvider;
