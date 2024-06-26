import './App.css'
import Banner from './components/banner/Banner'
import Clients from './components/clients/Clients'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Products from './components/products/Products'
import Register from './components/register/Register'

function App() {

  return (
    <>
      <Header/>
       <Banner />
       <Content/>
       <Products/>
       <Clients/>
       <Register/>
       <Footer/>
    </>
  )
}

export default App
