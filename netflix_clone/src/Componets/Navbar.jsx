import React, { useEffect, useState } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


function Navbar() {

    const [show, handleShow] = useState(false);
    const { user, logOut } = UserAuth();

    const handleLogout = async () => {
        try {
          await logOut();
        } catch (error) {
          console.log(error);
        }
      };

  useEffect(() => {
      window.addEventListener("scroll", () =>{
          if(window.scrollY > 100){
              handleShow(true);
          }else handleShow(false);
      });
  }, [])

    return (




        
        <div className={`navbar ${show && "nav__black"}`}>
            <img
            className="nav__logo"
             src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="NETFLIX" />
        {user?.email?(
            <div className='buttons'>
                <button onClick={handleLogout} className="logbtn">Logout</button>
            </div>
        ) : (
            <div>
            <div className="buttons">
                <Link to="/login"><button className="logbtn">Login</button></Link>
                <Link to="/signup"><button className="logbtn">Signup</button></Link>
            </div>
            </div>
        )}
        </div>
    )
}

export default Navbar;