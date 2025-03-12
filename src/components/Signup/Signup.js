import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Signup.css';
import logo from "../../assets/images/logo.png"; 
import mainImage from "../../assets/images/main-image.png"; 

const Signup = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password, 'Confirm Password:', confirmPassword);
    setCurrentPage("dashboard"); 
    navigate("/dashboard"); 
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-image">
          <img src={mainImage} alt="Main Illustration" className="main-image" />
        </div>
        <div className="signup-content">
        
        <img src={logo} alt="Logo" className="logoo" />
          <p>قم بإنشاء حساب جديد للوصول إلى محتويات الموقع</p>
          <form onSubmit={handleSubmit}>
          
            <div className="input-group">
              <input 
                type="email" 
                className='small-input'
                placeholder="أدخل البريد الإلكتروني الخاص بك" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="input-group">
              <input 
                type="password" 
                className='small-input'
                placeholder="أدخل كلمة المرور الخاصة بك" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <div className="input-group">
              <input 
                type="password" 
                className='small-input'
                placeholder="تأكيد كلمة المرور" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required 
              />
            </div>
           
            <button type="submit" className="signup-button">إنشاء حساب</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;