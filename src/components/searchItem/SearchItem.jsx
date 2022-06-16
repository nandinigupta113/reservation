import React from 'react'
import "./SearchItem.css"
const SearchItem = () => {
  return (
    <div className='SearchItem'>
        <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className='siImg'/>
        <div className="siDesc">
            <div className="siTitle">Tower Street Apartment</div>
            <div className="siloc">500m from center</div>
            <div className="siavail">Free airport taxi</div>
            <div className="cond">Studio Apartment with Air conditioning</div>
            <div className="studio">Entire studio . 1 bathroom . 21m2 1 full bed</div>
            <div className="cancel">Free cancellation</div>
            <div className="discrip">You can cancel later, so lock in this great price today!</div>
        </div>
        <div className="siDetails">
            <div className="sirating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="sitaxes">
                <div className="dollar">$123</div>
                <div className="sifees">includes taxes and fees</div>
                <button>See avaiability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem