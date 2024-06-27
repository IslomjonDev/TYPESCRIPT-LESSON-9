import { Route, Routes } from 'react-router'
import './App.css'

import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Admin from './pages/admin/Admin'
import Auth from './pages/auth/Auth'

function App() {

  return (
    <>
      <Header/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/' element={<Auth/>}>
            <Route path='admin' element={<Admin/>}/>
         </Route>
      </Routes>
       <Footer/>
    </>
  )
}

export default App
