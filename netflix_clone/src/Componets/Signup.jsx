import React, { useState } from "react";
import './signup.css'
import {Link, useNavigate} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Signup () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, signUp } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };
  
  return(
    <div className="signup_ctn">
        <div className="contents">
          <h1>Signup</h1>
          <form onSubmit={handleSubmit} className="signup_from">
            <input type="email" 
            placeholder="Enter your emial" 
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"/>


            <input type="password" 
            placeholder="Create your password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            />
            
            
            <button type="submit">Singup</button>
          </form>
          {/* {err && <p>Something went wrong</p>} */}
          <p>If you have a accout <Link to="/login"><span >Login</span></Link></p>
        </div>
    </div>
  )
}

export default Signup;