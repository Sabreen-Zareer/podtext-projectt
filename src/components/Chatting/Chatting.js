import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import "./Chatting.css";

const Chatting = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="main-content">
        <div className="top-bar">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="بحث عن..." className="search-input" />
          </div>
        </div>

        <main className="chat-main">
          <div className="chat-header">
            <h2 className="chat-title">Chatty AI</h2>
            <p className="chat-subtitle">أنا هنا لمساعدتك في كل ما</p>
            <p className="chat-subtitle"> تحتاجه، دعنا نتحدث !</p>
          </div>
          
          <div className="messages-box" ref={chatRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender === "user" ? "user-message" : "bot-message"}`}>
                {msg.text}
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
      <aside className="sidebar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav className="sidebar-nav">
          <a href="#" className="sidebar-link active">الرئيسية</a>
          <a href="#" className="sidebar-link">الدردشة</a>
          <a href="#" className="sidebar-link">الإعدادات</a>
        </nav>
        <button className="new-chat-btn">+ محادثة جديدة</button>
      </aside>
    </div>
  );
};

export default Chatting;
