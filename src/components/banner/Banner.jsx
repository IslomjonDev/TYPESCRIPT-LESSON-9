import React from 'react'
import './Banner.scss'
import { IoSearch } from "react-icons/io5";
import banner from '../../assets/banner.png'
const Banner = () => {
  return (
    <>
        <div className="banner">
            <div className="container">
                <div className="banner__content">
                    <div className="banner__left">
                        <h1>Discover Most Suitable Watches</h1>
                        <p>Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
                        <div className="left__inp">
                            <IoSearch />
                            <input type="text" placeholder="Find the best brands" />
                            <button>Search</button>
                        </div>
                    </div>
                    <div className="banner__right">
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner