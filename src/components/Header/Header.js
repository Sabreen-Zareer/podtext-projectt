import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png"; 

function Header({ setCurrentPage }) {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo-text">
        <img src={logo} alt="Logo" className="logo" />
          <span onClick={() => setCurrentPage("main")}>الرئيسية</span>
          <span onClick={() => setCurrentPage("features")}>مميزاتنا</span>
          <span onClick={() => setCurrentPage("infobox")}>اتصل بنا</span>
        </div>
        
       
      </div>
      <div className="auth-buttons">
        <button className="btn login" onClick={() => setCurrentPage("login")}>تسجيل الدخول</button>
        <button className="btn signup" onClick={() => setCurrentPage("signup")}>إنشاء حساب</button>
      </div>
    </header>
  );
}

export default Header;