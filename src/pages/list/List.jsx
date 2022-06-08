import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Header from '../../components/header/header'
import { useLocation } from "react-router-dom";
const list = () => {
  const location = useLocation();

  console.log(location);
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" />
            <div className="lsItem">
              <label>Check-in Date</label>
            </div>
            </div>
            <div className="listResult"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default list