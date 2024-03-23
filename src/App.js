import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

import { IoSearchOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { CgMenuLeft } from "react-icons/cg";
import { RiCheckboxCircleFill } from "react-icons/ri";



import { PiShoppingBagLight } from "react-icons/pi";
import "@fontsource/lato"; // Defaults to weight 400
import "@fontsource/lato/400.css"; // Specify weight
import "@fontsource/lato/400-italic.css"; // Specify weight and style


export default function App() {
   return (
      <div className="app">
        <div className="container">
          <section>
            <header>
              <div className='brandname-container'>
                <p className='brand-name'><span>Shalina</span>Beauty</p>
              </div>
              <div className='navbar-container'>
                <nav className="navbar"  >
                  <div className="navlink-container ">
                  <div className="menu-bar"><CgMenuLeft /></div> 
                 
                   <ul className="nav-links">
                        <li className='navlink-li'>
                        <Link to="#home">Home</Link></li>
                      <li><Link to="#about">About</Link></li>
                      <li><Link to="#treat">Treatment</Link></li>
                      <li><Link to="#blog">Blog</Link></li>
                      <li><Link to="#contact">Contact</Link></li>
                    </ul>
                  </div>
                   
                </nav>

              </div>
              <div className='icon-container'>
                <IoSearchOutline className='search-icon' />
                <IoPersonOutline className='person-icon' />
                <PiShoppingBagLight className='bag-icon' />
                <img src="pinkdot.jpg" className='pink-dot' alt="pink-dot" />
              </div>
            </header>
          </section>

          <section className="body-part">
            <div className='txt-part'>
              <p>Glow your face and Spa with extract flower</p>
            </div>
            <div className='img-part'>
              <div classNames="salon-img">
                <img  className="salon-img-pic" src="salonImg.jpg" alt="salon img"  />
              </div>
            </div>

            <div className='description'>
              <ul className='description-txt'>
                <li className='descrption-li'>
                 <span className="service-txt">
                   <div className='checkpt-icon'><RiCheckboxCircleFill className='checkpt-icon'/></div>
                 </span>
                  <p className='description-para'>Facial and skin care treatment</p>
                </li>
                <li className='descrption-li'>
                 <span className="service-txt">
                   <div><RiCheckboxCircleFill className='checkpt-icon'/></div>
                 </span>
                 <p className='description-para'>Waxing hair treatment and nail treatment</p>
                </li>
                <li className='descrption-li'>
                 <span className="service-txt">
                   <div className='checkpt-icon'><RiCheckboxCircleFill className='checkpt-icon'/></div>
                 </span>
                 <p className='description-para'>Complementary care such as aromatherapy,massages </p>
                </li>
              </ul>

              <div className='btn-container'>
                <div className='btn-left-container'>
                  <button className='btn-left' style={{ backgroundColor: "#E5429B" }}>Book Appointment</button>
                </div>
                <div className='btn-right-container'>
                  <button className='btn-right' >Learn More</button>
                </div>
              </div>

            </div>


          </section>
        </div>
      </div>
    );
  }
