import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaHome, FaCog, FaPlus } from "react-icons/fa";
import { TiArrowRepeatOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/images/logo.png";
import "./Chatting.css";

const Chatting = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);
  const navigate = useNavigate();

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await axios.post("http://localhost:5000/chat", {
        message: input,
      });
      const botMessage = { text: res.data.reply, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
    }

    setInput("");
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleFileListClick = () => {
    navigate("/FileList");
  };

  return (
    <div className="chat-container">
      <aside className="sidebarr">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav className="sidebarr-nav">
          <button>القائمة</button>
          <button onClick={() => navigate("/")} className="sidebar-link"><FaHome /> الرئيسية</button>
          <button onClick={handleFileListClick} className="sidebar-link">📂 الملفات</button>
          <button onClick={() => navigate("/settings")} className="sidebar-link"><FaCog /> الإعدادات</button>
        </nav>
        <div>
          <button className="add-btn"><FaPlus /> +</button>
          <button className="re-btn"><TiArrowRepeatOutline /></button>
        </div>
      </aside>

      <div className="main-content">
        <div className="top-barr">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="بحث عن..." className="search-input" />
          </div>
        </div>

        <main className="chat-main">
          <div className="chat-header">
            <h2 className="chat-title">Chatty AI</h2>
            <p className="chat-subtitle">أنا هنا لمساعدتك في كل</p>
            <p className="chat-subtitle"> ما تحتاجه، دعنا نتحدث!</p>
          </div>
          
          <div className="messages-box" ref={chatRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender === "user" ? "user-message" : "bot-message"}`}>
                <strong>{msg.sender === "user" ? "أنت" : "الذكاء الاصطناعي"}:</strong> {msg.text}
              </div>
            ))}
          </div>
          
          <div className="input-box">
            <input
              type="text"
              className="chat-input"
              placeholder="اكتب رسالتك هنا..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button className="send-btn" onClick={sendMessage}>إرسال</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Chatting;
