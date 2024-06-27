import React from 'react'
import './Home.scss'
import Products from '../../components/products/Products'
import Register from '../../components/register/Register'
import Banner from '../../components/banner/Banner'
import Clients from '../../components/clients/Clients'
import Content from '../../components/content/Content'
const Home = () => {
  return (
    <>
      <div className="home">
            <Banner />
            <Content/>
            <Products/>
            <Clients/>
            <Register/>
          </div>
    </>
  )
}

export default Home