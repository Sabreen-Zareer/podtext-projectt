import React from "react";
import "./Features.css";

function Features() {
  return (
    <section className="features">
      <h2>ميزتنا الحالية</h2>
      <div className="features-container">
        <div className="feature-box">
          <h3>تحميل الفيديو إلى نص</h3>
          <p>يمكنك بسهولة تحويل أي فيديو إلى نص مكتوب بدقة.</p>
        </div>
        <div className="feature-box">
          <h3>تحليل</h3>
          <p>يوفر لك تحليلاً دقيقًا للمحتوى الصوتي وتحويله إلى نص ذكي.</p>
        </div>
        <div className="feature-box">
          <h3>سؤال وجواب</h3>
          <p>بعد تحويل المحتوى إلى نص، يمكنك طرح أسئلة حول المحتوى بسهولة.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
