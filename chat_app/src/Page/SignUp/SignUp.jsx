import './signup.css'
import React, { useState } from "react"
import {SiGnuprivacyguard} from 'react-icons/si'
import chat from './chatpic.jpg'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'


const SignUp = () => {
  
  const [formData, setFormData] = useState({
    userId: '',
    name:'',
    email:'',
    mobileNo:'',
    password:'',
    country:'',
    state:'',
    city:'',
    pincode :''

  })
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const ClickSignUp = (event) => {
    event.preventDefault();
    const { userId , ...data}= formData;
    const userData = { [userId] : data};
    setFormData(
      {userId: '123', name:'twenkle',email:'chat@123',mobileNo:'123',password:'chat123',country:'india',state:'westbengal', city:'kolkata',pincode:'153'}

    )
    console.log(userData)
  };

  return (
    <div className='signup_ctn'>
       <div className="img">
            <img src={chat} className='picture'></img><br></br>
           
          </div>
            <div className="tags"><p>Welcome!</p>
            <p>Let's get 
              started</p>
              <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
              </div>
          
      <form action='' className='signup_form'>
      <SiGnuprivacyguard></SiGnuprivacyguard>
        <h1>Sign up for an account</h1>
        <div className='input_ctn'>
         
          <input type='text' className='input_fild' placeholder='Create a UserID' name='userId' value={formData.userId} onChange={handleInputChange}/>
        </div>
        <div className='input_ctn'>
          
          <input type='text' className='input_fild' placeholder='Enter your Name' name='name' value={formData.name} onChange={handleInputChange}/>
        </div>
        <div className='input_ctn'>
          
          <input type='email' className='input_fild' placeholder='Enter your Email' name='email' value={formData.email} onChange={handleInputChange} />
        </div>
        <div className='input_ctn'>
      
          <input type='text' maxLength={10} className='input_fild' placeholder='Enter your Mobile No.' name='mobileNo' value={formData.mobileNo} onChange={handleInputChange}/>
        </div>
        <div className='input_ctn'>
          
          <input type='password' className='input_fild' placeholder='Password must be 8 characters' name='password' value={formData.password} onChange={handleInputChange} />
        </div>
        <div className='input_ctn'>
          
          <input type='text' className='input_fild' placeholder='Country' name='country' value={formData.country} onChange={handleInputChange} />
        </div>
        <div className='input_ctn'>
          
          <input type='text' className='input_fild' placeholder='State' name='state' value={formData.state} onChange={handleInputChange} />
        </div>
        <div className='input_ctn'>
          
          <input type='text' className='input_fild' placeholder='City' name='city' value={formData.city} onChange={handleInputChange} />
        </div>
        <div className='input_ctn'>
          
          <input type='text' className='input_fild' placeholder='Pincode' name='pincode' value={formData.pincode} onChange={handleInputChange} />
        </div>
        <button className='save' onClick={ClickSignUp}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
