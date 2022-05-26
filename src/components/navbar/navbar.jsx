import React from 'react'
import "./navbar.css"
import icon from "../../assets/icon.png"

const navbar = () => {
  return (
   <div className="navbar">
    <div className="navbarin">
     <div className="favicon">
         <img src={icon} alt="" />
         <h2>Iambooking</h2>
     </div>
     <div className="log">
         <button className='navbtn'>Login</button>
         <button className='navbtn'>Sign Up</button>
     </div>
     </div>
   </div>
  )
}

export default navbar