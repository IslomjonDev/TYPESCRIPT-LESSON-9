import React, { useEffect, useState } from 'react'
import './Login.scss'
import img from '../../assets/banner.png'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import {setToken , setUser} from '../../context/slice/authSlice'
import {useSignInMutation} from '../../context/api/ProductApi'


const Login = () => {
  const navigate = useNavigate()

  if(localStorage.getItem("x-auth-token")){
    navigate('/admin')
  }else{
    navigate('/login')
  }

  const [PostSignIn , {data  , isSuccess , isError}] = useSignInMutation()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()


 useEffect(() => {
  if(isSuccess){
    dispatch(setToken(data?.data?.token))
    dispatch(setUser(data?.data?.user))
    navigate('/admin')
  }
  if(isError){
    toast.error('Xato kiritingiz')
  }

 } , [isSuccess])


  const handleLogin = (e) => {
    e.preventDefault()
    PostSignIn({
      UserName: username, 
      password: password
    })
  }


  return (
    <>
       <div className="login">
           <div className="container">
                <div className="login__content">
                    <div className="login__left">
                       <img src={img} alt="" />
                    </div>
                    <div className="login__right">
                        <form onSubmit={handleLogin} action="">
                            <h2>Login</h2>
                            <span>
                                <label htmlFor="">Your Username</label>
                               <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" name="Userame" placeholder='john32'/>
                            </span>
                            <span>
                                <label htmlFor="">Password</label>
                               <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password"  placeholder='12345678'/>
                            </span>
                            <button>Login</button>
                        </form>
                    </div>
                </div>
           </div>
       </div>
    </>
  )
}

export default Login