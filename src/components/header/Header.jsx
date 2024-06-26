import React, { useState } from 'react'
import './Header.scss'
import { IoSearchOutline , IoCart } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

import logo from '../../assets/logo.svg'
const Header = () => {

  let [burger , setBurger] = useState(false)

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="navbar">
              <div className="nav__logo">
                <img src={logo} alt="" />
                 <p>Mohid</p>
              </div>
              <div className={`nav__list ${burger ? 'show' : ''}`}>
                  <ul>
                     <li><a href="">Home</a></li>
                     <li><a href="">Brands</a></li>
                     <li><a href="">Recent Products</a></li>
                     <li><a href="">Contact</a></li>
                     <li><a href="">About</a></li>
                  </ul>
              </div>
              <div className="nav__icons">
                <IoSearchOutline />
                 <FaUser className='user__icon' />
                <IoCart />
              </div>
              <div className="nav__burger" onClick={() => setBurger(!burger)}>
                <RxHamburgerMenu />
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header