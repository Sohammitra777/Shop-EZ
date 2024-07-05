import React from 'react';
import './loginsignup.css'
import { Link } from 'react-router-dom'
const Loginsignup = () => {
  return (
    
      
      <div className="loginsignup" style={{}}>
          <div className="container">
            <h1>Login</h1>
            <div className='loginsignupfields'>
          
              <span className="glyphicon glyphicon-user"></span>
              <input type="text" name="username" placeholder="Username" required />
            
            
              <span className="glyphicon glyphicon-lock"></span>
              <input type="password" name="password" placeholder="Password" required />
           
            
          </div>
          <button className="submit" type="submit">Submit</button>
          <p className='signup'>New user? <Link to="/signin" className='sign'>Sign Up</Link></p>

          </div>
          
        
        
        </div>
      

  );
}

export default Loginsignup;
