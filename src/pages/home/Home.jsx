import "./home.css"
import Navbar from "../../components/navbar/navbar"
import Header from "../../components/header/header"
import Featured from "../../components/featured/featured"
import Property from "../../components/propertyList/property"
import FeaturedProperty from "../../components/featuredProperties/featuredProperties"
import Mail from "../../components/mail/mail"
import Footer from "../../components/footer/footer.jsx"
import React from 'react'

const home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
        <Featured/>
        <h2 className="homeTitle">Browse by property type</h2>
        <Property/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperty/>
        </div>
        <Mail/>
        <Footer/>
    </div>
  )
}

export default home