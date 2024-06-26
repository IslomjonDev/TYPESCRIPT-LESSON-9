import React from 'react'
import { IoSearch } from 'react-icons/io5'
import './Register.scss'
import register from '../../assets/register.png'
const Register = () => {
  return (
    <>
      <div className="register">
          <div className="container">
              <div className="register__content">
                    <div className="register__left">
                        <h1>Subscribe To Newsletter</h1>
                        <p>Get free guide about smart watches daily. </p> <div className="left__inp">
                            <IoSearch />
                            <input type="text" placeholder="Enter Email Address" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                    <div className="register__right">
                        <img src={register} alt="" />
                    </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Register