import React from "react";
import { useNavigate } from "react-router-dom";
import mainImage from "../../assets/images/main-image.png"; 
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/verify");
  };

  return (
    <div className="container">
      <div className="image-container">
      <img src={mainImage} alt="Main Illustration" className="main-image" />
      </div>
      <div className="form-container">
        <h2>نسيت كلمة المرور؟</h2>
        <p>لا تقلق! سنساعدك في استعادة حسابك.</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>البريد الإلكتروني:</label>
            <input type="email" required />
          </div>
          <button type="submit">إرسال رمز التأكيد</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;