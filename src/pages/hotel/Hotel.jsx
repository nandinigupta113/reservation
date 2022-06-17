import React, {useState} from 'react'
import "./hotel.css";
import Navbar from '../../components/navbar/navbar'
import Header from '../../components/header/header'
import Mail from '../../components/mail/mail'
import Footer from '../../components/footer/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot, faCircleXmark, faCircleArrowLeft, faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import { isDisabled } from '@testing-library/user-event/dist/utils';
// import { sl } from 'date-fns/locale';
const Hotel = () => {

  const [openslider, setOpenslider] = useState(false);
  const [sliderNumber, setSliderNumber] = useState(0);

  const handleopen = (i) => {
    setSliderNumber(i);
    setOpenslider(true);
  }

  const direction = (x) => {
   let newsliderNumber;
   if(x === 'l'){
    newsliderNumber = sliderNumber === 0 ? 5: sliderNumber -1;
   }
   else{
    newsliderNumber = sliderNumber === 5 ? 0: sliderNumber + 1;
   }
   setSliderNumber(newsliderNumber);
  }

  const photos = [
    {
      src: "https://images.unsplash.com/photo-1582610116397-edb318620f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1582610116397-edb318620f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1582610116397-edb318620f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1582610116397-edb318620f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ]
  return (
    <div>
       <Navbar/>
       <Header type="list"/>
       <div className="hotelContainer">
        {openslider && <div className="slider">
          <FontAwesomeIcon onClick={() => setOpenslider(false)}className="close" icon={faCircleXmark}/>
          <FontAwesomeIcon onClick={() => direction('l')} className="arrow" icon={faCircleArrowLeft}/>
          <div className="slideWrapper">
            <img src={photos[sliderNumber].src} alt="" className='sliderImg'/>
          </div>
          <FontAwesomeIcon onClick={() => direction('r')} className="arrow" icon={faCircleArrowRight}/>
        </div>}
        <div className="textWrapper">
        <div className="titlewrap">
        <h1 className="hotelTitle">Grand Hotel</h1>
        <button className='reserve'>Reserve or Book now!</button>
        </div>
          <div className="hotelAddress">
            <FontAwesomeIcon icon= {faLocationDot}/>
            <span>Elton St 125 New york</span>
          </div>
          <div className="hotelloc">Excellent location - 500m from center</div>
          <div className="bookstay">Book a stay over$114 at this property and get a free airport taxi</div>
          <div className="hotelImages">
            {photos.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img onClick={() => handleopen(i)} src={photo.src} alt="" className='hotelImg'/>
              </div>
            ))}
          </div>
          <div className="hoteldisc">
            <div className="box1">
              <h1>Stay in the heart of it</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum reiciendis explicabo delectus fuga, earum, exercitationem corporis nostrum, libero adipisci autem ipsam tenetur et rerum nemo beatae. Mollitia, eveniet! Nihil, illo pariatur dolore neque praesentium autem cupiditate, aliquid similique, mollitia obcaecati officiis suscipit voluptas delectus iure ipsa consectetur voluptatem placeat.</p>
            </div>
            <div className="box2">
              <h2>Perfect for a 9-night stay!</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, iusto!</p>
              <span><strong>$945</strong>(9 nights)</span>
              <button className='reserve'>Reserve or Book now!</button>
            </div>
          </div>
       
        </div>
       </div>
       <Mail/>
        <Footer/>
    </div>
  )
}

export default Hotel
