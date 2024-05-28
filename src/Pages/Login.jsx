import React from 'react'
import'./CSS/Login.css'

const Login = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Sign up </h1>
        <div className="lognsingup-fields">
          <input type="text" placeholder=" Your Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
         
          
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account?
          <span>Login Here</span> 
        </p>
          <div className="loginsignup-agree">
            <input type="checkbox" />
            <span>I agree to the terms and conditions</span>
             
          </div>
      </div>

    </div>
  )
}

export default Login