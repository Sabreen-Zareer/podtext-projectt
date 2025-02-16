import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  // تبديل عرض كلمة المرور عند النقر على رمز العين
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-image">
          <img src="/login-image.png" alt="Login Illustration" />
        </div>
        <div className="login-form">
          <img src="/logo.png" alt="Logo" className="logo" />
          <h2>تسجيل الدخول</h2>
          <p>قم بتسجيل الدخول حتى تستطيع الوصول إلى معلومات الموقع</p>
          <form>
            <label>البريد الإلكتروني</label>
            <input type="email" placeholder="أدخل البريد الإلكتروني الخاص بك" required />

            <label>كلمة المرور</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"} // تغيير نوع الحقل
                placeholder="أدخل كلمة المرور الخاصة بك"
                required
              />
              <span className="toggle-password" onClick={togglePasswordVisibility}>
                {showPassword ? "" : ""}
              </span>
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> تذكرني
              </label>
              <a href="#">نسيت كلمة المرور؟</a>
            </div>

            <button type="submit">تسجيل الدخول</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
