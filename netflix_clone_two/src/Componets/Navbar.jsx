import React from 'react';
import '../App.css';
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user.email)

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        <h1 className="navbar-title">NETFLIX</h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="navbar-button">Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className="navbar-button navbar-button--logout"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="navbar-button">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="navbar-button navbar-button--signup">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
  
};

export default Navbar;