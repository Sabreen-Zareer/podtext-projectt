import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import logo from "../../assets/images/logo.png";
import profilePic from "../../assets/images/profile.jpg";
import nisba from "../../assets/images/nisba.png";
import nsba from "../../assets/images/nsba.png";
import avg from "../../assets/images/avg.png";

import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = true; 
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  const handleAddFileClick = () => {
    navigate("/file-upload");
  };

  const handleChatClick = () => {
    navigate("/chatting");
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <ul>
          <li className="active">الرئيسية</li>
          <li>الملفات</li>
          <li>الإعدادات</li>
          <li onClick={handleChatClick}>الشات</li>
          <li onClick={handleChatClick}>التلخيص</li>
        </ul>
      </div>
      <div className="main-content">
        <div className="top-bar">
          <div className="profile-container">
            <img src={profilePic} alt="User" className="profile-pic" />
          </div>
          <div className="search-container">
            <IoMdSearch className="search-icon" />
            <input type="text" placeholder="ابحث عن ..." className="search-box" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="stats">
          <img src={nisba} alt="إجمالي عدد الصم" className="stat-image" />
          <img src={nsba} alt="إجمالي عدد المتعلمين" className="stat-image" />
        </div>
        <br />
        <br />
        <div className="chart-container">
          <img src={avg} alt="توزيع الأفراد ذوي الإعاقة حسب الجنس" className="chart-image" />
        </div>

        <button className="add-file" onClick={handleAddFileClick}>
          <FaPlus /> إضافة ملف
        </button>
      </div>
    </div>
  );
};

export default Dashboard;