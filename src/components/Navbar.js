import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🎤 PodText</div>
      <ul className="nav-links">
        <li><a href="#">الرئيسية</a></li>
        <li><a href="#">تواصل معنا</a></li>
        <li><a href="#">حول</a></li>
      </ul>
      <div className="buttons">
        <button className="btn">تسجيل الدخول</button>
        <button className="btn signup">إنشاء حساب</button>
      </div>
    </nav>
  );
}

export default Navbar;
