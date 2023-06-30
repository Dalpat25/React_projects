import React, { useState } from 'react';
import '../App.css';
import {Link ,useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
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

  return (
    <>
      <div className="signup-container">
        <img
          className="signup-image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="signup-overlay"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="signup-form">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="signup-heading">Sign Up</h1>
              <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="signup-input"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="signup-input"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="signup-button">Sign Up</button>
                <div className="signup-remember-help">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="signup-bottom-text">
                  <span className="text-gray-600">Already subscribed to Netflix?</span>{" "}
                  <Link to="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
};

export default Signup;