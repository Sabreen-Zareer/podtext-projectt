import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>مرحباً بك في PodText</h1>
        <p>
          يهدف هذا الموقع إلى مساعدة ذوي الاحتياجات الخاصة في الوصول إلى المحتوى المسموع عبر تحويله إلى نص.
        </p>
        <button className="start-btn">ابدأ الآن</button>
      </div>
      <img src="/header-image.png" alt="Illustration" className="header-image" />
    </header>
  );
}

export default Header;
