import React from 'react'
import '../style.scss'
import Add from '../img/addAvatar.png'

const Login = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo">Lama Chat</span>
        <span className="title">Login</span>
        <form action="">
            <input type="text" name="" id="" placeholder='display name'/>
            <input type="email" name="" id="" placeholder='email'/>
           
            <button>Sign in</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  )
}

export default Login
