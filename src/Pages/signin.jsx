import React from 'react';
import './CSS/loginsignup.css'
import { Link } from 'react-router-dom'
const Loginsignup = () => {
  return (
    
      
      <div className="loginsignup" style={{}}>
          <div className="container">
            <h1>Sign Up</h1>
            <div className='loginsignupfields'>
          
              <span className="glyphicon glyphicon-user"></span>
              <input type="text" name="username" placeholder="Username" required />
            
            
              <span className="glyphicon glyphicon-lock"></span>
              <input type="password" name="password" placeholder="Password" required />
           
            
          </div>
          <button className="submit" type="submit">Submit</button>
          <p className='signup'>Already a user <Link to="/Loginsignup" className='sign'>Login</Link></p>

          </div>
          
        
        
        </div>
      

  );
}

export default Loginsignup;
