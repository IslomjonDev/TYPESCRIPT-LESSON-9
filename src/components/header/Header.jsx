import React, { useState } from 'react'
import './Header.scss'
import { IoSearchOutline , IoCart } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {

  let [burger , setBurger] = useState(false)

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="navbar">
            <Link to={'/'}>
              <div className="nav__logo">
                <img src={logo} alt="" />
                 <p>Mohid</p>
              </div>
            </Link>
              <div className={`nav__list ${burger ? 'show' : ''}`}>
                  <ul>
                     <li>
                       <Link to={'/'}>Home</Link>
                     </li>
                     <li><a href="">Brands</a></li>
                     <li><a href="">Recent Products</a></li>
                     <li><a href="">Contact</a></li>
                     <li>
                        <Link to={'/'}>
                          About
                        </Link>
                     </li>
                  </ul>
              </div>
              <div className="nav__icons">
                <IoSearchOutline />
                <Link to={localStorage.getItem("x-auth-token") ? '/admin' : '/login'}>
                 <FaUser className='user__icon' />
                </Link>
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