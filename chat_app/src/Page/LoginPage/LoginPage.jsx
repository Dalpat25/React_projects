import React, {useState} from "react";

import './loginpage.css' 

import {FaEnvelopeOpenText} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {AiFillLock} from 'react-icons/ai'
import { useNavigate } from "react-router-dom"

const LoginPage =()=>{
    let navigate =useNavigate()
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [flag, setFlag]= useState(false)
    function emailHandler(event){
        setEmail(event.target.value)
        setFlag(false)
    }
    function passwordHandler(event){
        setPassword(event.target.value)
       
        setFlag(false)
    }
    const buttonHandler =(event)=>{
        event.preventDefault()
        if(email==="chat@123" && password==="chat123"){
            navigate('/chat')

        }else{
            setFlag(true)
        }
        setEmail("")
        setPassword("")
    }
    return (
       <div className="login"> 
        
       
        <div className="headings">
        <FaEnvelopeOpenText size={32} color="white" className="iconss" ></FaEnvelopeOpenText>
        
        <h3>Welcome back!</h3>
        <div className="mains">
        
        <FiUser size={22} color="gray" className="user_iconss"></FiUser>
        <input type="text" className="idd" placeholder="enter email" onChange={emailHandler} value={email}/>
        
        <AiFillLock size={22} color="gray" className="user_iconss"></AiFillLock>
        <input type="text" className="idd" placeholder="enter password" onChange={passwordHandler} value={password}/>
        <button className="logg" onClick={buttonHandler}>LogIn</button>
        {flag &&<h2 className="warnings">Either email or password is incorrect</h2>}
       
                    <p className="conts">Don't have an account?</p>
                     <a href="SignUp" className="green"><b>SignUp</b></a>
                     </div>
                     </div>

       </div>
        
    
    );
}

export default LoginPage;