import React from 'react'
import {useState} from 'react';
import { DateRange } from 'react-date-range';
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlane} from '@fortawesome/free-solid-svg-icons'
import {faBed,faPerson,faCalendarDays,faTaxi,faCar,} from '@fortawesome/free-solid-svg-icons'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from 'date-fns';


const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate:new Date(),
      key: 'selection'
    }
  ]);
  const [options, setOptions] = useState(
    {
      adult:7,
      children:0,
      room:1
    }
  );
  const [openOptions, setOpenOptions] = useState(false);
  const handleOptions = (name,move) =>{
    setOptions((prev) => {
      return{   
        ...prev,
        [name]: move === "i"?options[name] + 1:options[name] - 1,
      };
    });
  };

  return (
    <>
    <div className="header">
      <div className="headerList">
        <div className="headerListItem active">
        <FontAwesomeIcon icon={faBed} />
        <span>Stays</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faPlane} />
        <span>Flights</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faCar} />
        <span>Car Rentals</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faBed} />
        <span>Attractions</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faTaxi} />
        <span>Airport Taxis</span>
        </div>
      </div>
    </div>
{ type !== "list" &&
   <> <div className="offer">
      <div className="offerin">
      <h1 className="disc">A lifetime of discounts? It's Genius.</h1>
      <h3 className="disc2">Get rewarded for your travels - unlock instant savings of 10% or more with free booking account</h3>
      <button className="signIn">Signin/Register</button>

      <div className="headSearch">
      <div className="headersearchItem">
      <FontAwesomeIcon icon={faBed} className="headerIcon"/>
      <input type="text" placeholder='Where are you going?' className="headerSearchText"/>
      </div>
      <div className="headersearchItem">
      <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
      <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">
        {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}
      </span>
       {openDate && <DateRange
          editableDateInputs={true}
          onChange={item => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className="calander"/>}
      </div>

      <div className="headersearchItem">
      <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
      <span className="headerSearchText"onClick={() => setOpenOptions(!openOptions)} >{`${options.adult}`} adults {`${options.children}`} children  { `${options.room}`} room</span>
      {openOptions && <div className="selection">
        <div className="selectionlist">
        <span className="optiontext">Adult</span>
        <div className="selectionll">
        <button className="counterbtn" disabled={options.adult<=0} onClick = {() => handleOptions("adult","d")}>-</button>
        <span className="num">{options.adult}</span>
        <button className="counterbtn" onClick = {() => handleOptions("adult","i")}>+</button>
        </div>
        </div>
        <div className="selectionlist">
        <span className="optiontext">Children</span>
        <div className="selectionll">
        <button className="counterbtn" disabled={options.children<=0} onClick = {() => handleOptions("children","d")}>-</button>
        <span className="num">{options.children}</span>
        <button className="counterbtn" onClick = {() => handleOptions("children","i")}>+</button>
        </div>
        </div>
        <div className="selectionlist">
        <span className="optiontext">Room</span>
        <div className="selectionll">
        <button className="counterbtn" disabled={options.room<=0} onClick = {() => handleOptions("room","d")}>-</button>
        <span className="num">{options.room}</span>
        <button className="counterbtn"onClick = {() => handleOptions("room","i")}>+</button>
        </div>
        </div>
      </div>}
      </div>
      <div className="headersearchItem">
      <button className="headerbtn">Search</button>
      </div>
      </div>
      </div>
    </div> </>}
    </>
  )
}

export default Header