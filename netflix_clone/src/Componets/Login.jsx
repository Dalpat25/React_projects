import React, { useState } from "react";
import './login.css'
import {Link, useNavigate} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { user, logIn } = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
        await logIn(email, password)
        navigate('/')
        } catch (error) {
        console.log(error);
        setError(error.message)
        }
    };



  return(
    <div className="login_ctn">
    <div className="contents">
          <h1>Login</h1>
          <form onSubmit={handleSubmit} className="signup_from">
            <input type="email"
            placeholder="Enter your emial" 
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            />
            <input type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            />
            <button type="submit">Login</button>
          </form>
          <p>err</p>
          <p>If you have a accout <Link to="/signup"><span >Signup</span></Link></p>
        </div>
    </div>
  )
}

export default Login;