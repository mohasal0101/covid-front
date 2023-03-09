import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Records.css";
import "./Records.scss";


export const Records = () => {
  const [myRecords, setMyRecords] = useState([]);
  const Swal = require('sweetalert2')

  const handleDelete = async (id) => {
    await axios
      .delete(`${process.env.REACT_APP_LOCAL}/record/${id}`)
      .then((resolve) => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
      }
      )
      .catch((rejected) => console.log("error!"));

      
  };
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${process.env.REACT_APP_LOCAL}/record`)
        .then((resolve) => setMyRecords(resolve.data))
        .catch((rejected) => console.log("error!"));
    };
    fetchData();
    console.log(1);
  }, []);
  return (
    <div className="main-record-container">
      <h1 className="all">
      <span>Records </span>Statics <span>Data</span>
      </h1>
      <div className="my-records-holder">
        {myRecords.length ? 
        myRecords?.map((record) => {
          return (
            <div key={record.id} className="record-card-container">
              <div className="background">''</div>
              <div className="record-data-container">
                <label className="record-label">
                  Country: {record.country}
                </label>
                <label className="date-record-label">Date: {record.date}</label>
                <button
                  className="delete-records"
                  onClick={() => handleDelete(record.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        }):
        <label className="no-record">No Available Records ¯\_(ツ)_/¯</label>
        }
      </div>
    </div>
  );
};
