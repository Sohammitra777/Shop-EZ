import React from 'react'
import "../Pages/CSS/LoginSignup.css"
import logo from "../components/Assets/logo.jpg"

const Loginsignup = () => {
  return (
    <div className='login'>
      <div id="logo">
        <img src={logo} alt=''  width={400} id="img"/>
      </div>
      <div className="login_box">
        <h1>LOGIN</h1>
        <br/>
            <span className="formm">
                <span className="icons">
                    <i className="fa-solid fa-user"></i>
                    <label for="username" className="labels">Username </label>
                </span>
                <input type="text" name="username" id="username" placeholder="Enter Username" required />
            </span>
            <br/>
            <span className="formm">
                <span className="icons">
                    <i className="fa-solid fa-lock" ></i>
                    <label for="password" className="labels">Password </label>
                </span>
                <input type="password" name="password" id="password" placeholder="Enter the password" required />
            </span>
            <br/>
            <span className="formm">
                <input type="submit" placeholder="SUBMIT" id="submit"/>
            </span>

        <p id="signups">Don't have an account! <a id="signuplink" href="signup.html"> CLICK HERE</a> to SIGN UP</p>
      </div>
    </div>
  )
}

export default Loginsignup
