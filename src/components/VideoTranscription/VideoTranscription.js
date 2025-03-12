import React from "react";
import { useNavigate } from "react-router-dom"; 
import Button from "../Button/Button";
import { FaSearch } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { FaHome } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import "./VideoTranscription.css";

const VideoTranscription = () => {
  const navigate = useNavigate(); 

  return (
    <div className="video-transcription-container">
     
      <div className="main-content">
        
        <div className="top-bar">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="بحث عن..." className="search-input" />
          </div>
        </div>

      
        <div className="video-card">
          <h2 className="video-title">اسم الفيديو الذي تم تحميله</h2>
          <a
            href="https://help.figma.com/hc/en-us/articles/15145852043927-Create-and-manage-variables"
            target="_blank"
            rel="noopener noreferrer"
            className="video-link"
          >
            https://help.figma.com/hc/en-us/articles/15145852043927-Create-and-manage-variables
          </a>
          <Button className="summarize-button">التلخيص 🎤</Button>
        </div>

        <div className="transcription-card">
          <h3 className="section-title">Scope a variable</h3>
          <p className="description">
            Scoping a variable allows you to limit which properties it can be applied to. This gives you better control over where the variable can be used and cuts out the guesswork when designing.
          </p>
          <p className="description">
            For example, if you scope a number variable to corner radius, you’ll only be able to apply the variable to corner radius. The variable won’t appear as an option for other supported properties.
          </p>
          <p className="description">Scoping is available for number and color variables.</p>
          <ul className="variable-list">
            <li>Corner radius</li>
            <li>Width and height</li>
          </ul>
          <div className="progress-container">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "75%" }}></div>
            </div>
            <span className="progress-text">75%</span>
            <Button variant="outline" className="conversation-button">conversation</Button>
          </div>
        </div>
      </div>

     
      <aside className="sidebar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav className="sidebar-nav">
          <button onClick={() => navigate("/")} className="sidebar-link active"> <FaHome />الرئيسية </button>
          <button onClick={() => navigate("/files")} className="sidebar-link">الملفات</button>
          <button onClick={() => navigate("/settings")} className="sidebar-link"><FaCog /> الاعدادات</button>
        </nav>
      </aside>
    </div>
  );
};

export default VideoTranscription;