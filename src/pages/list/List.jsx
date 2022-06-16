import React, {useState} from 'react'
import Navbar from '../../components/navbar/navbar'
import Header from '../../components/header/header'
import "./List.css";
import { useLocation } from "react-router-dom";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import {format} from 'date-fns';
import SearchItem from '../../components/searchItem/SearchItem';

const List = () => {
  const location = useLocation();
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setoptions] = useState(location.state.options)

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
              <input placeholder={destination} type="text" />
            <div className="lsItem">
              <label>Check-in Date</label>
              <span className='checkin' onClick={e=> {setOpenDate(!openDate)}}>    {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
              { openDate && < DateRange
          editableDateInputs={true}
          onChange={item => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          minDate={new Date()}
          ranges={date} className="sicalander"/>}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptionsItem">
                <span className="lsOptionText">
                  Min price <small>per night</small>
                </span>
                <input type="text" className="lsoptionInput" />
              </div>
              <div className="lsOptionsItem">
                <span className="lsOptionText">
                  Max price <small>per night</small>
                </span>
                <input type="text" className="lsoptionInput" />
              </div>
              <div className="lsOptionsItem">
                <span className="lsOptionText">
                  Adult
                </span>
                <input type="number" min={1} className="lsoptionInput" placeholder={options.adult} />
              </div>
              <div className="lsOptionsItem">
                <span className="lsOptionText">
                  Children
                </span>
                <input type="number" min={0} placeholder={options.children} className="lsoptionInput" />
              </div>
              <div className="lsOptionsItem">
                <span className="lsOptionText">
                  Room
                </span>
                <input type="number" min={1} className="lsoptionInput"placeholder={options.room} />
              </div>
              <button className='hotel_search'>Search</button>
            </div>
            </div>
            </div>
            <div className="listResult">
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default List