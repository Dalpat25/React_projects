import React from "react";
import './navbar.css'


const Navbar = () =>{
    return(
        <div className="navbar_ctn">
            <div className="heading">
                <div className="pic"></div>
                <h2>ChatApp</h2>
            </div>
            <div className="menu_bar">
                <button className="menu">
                    <div className="pic1"></div>
                    <p>Dashboard</p>
                </button>
                <button className="menu">
                    <div className="pic2"></div>
                    <p>Analitys</p>
                </button>
                <button className="menu">
                    <div className="pic3"></div>
                    <p>Files</p>
                </button>
                <button className="menu">
                    <div className="pic4"></div>
                    <p>Calls</p>
                </button>
                <button className="menu">
                    <div className="pic5"></div>
                    <p>Messages</p>
                </button>
                <button className="menu">
                    <div className="pic6"></div>
                    <p>Community</p>
                </button>
                <button className="menu">
                    <div className="pic7"></div>
                    <p>Settings</p>
                </button>
            </div>
        </div>
    )
}


export default Navbar;
