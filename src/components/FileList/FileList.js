import React from "react";
import { FaPlus, FaSearch, FaTrash, FaEdit, FaEye } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import "./FileList.css";

const FileList = () => {
  return (
    <div className="container">
      {/* الشريط الجانبي */}
      <div className="sideba">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav className="sidebar-nav">
          <a>القاائمة</a>
          <a href="#" className="sidebar-link">🏠 الرئيسية</a>
          <a href="#" className="sidebar-link active">📂 الملفات</a>
          <a href="#" className="sidebar-link">⚙️ الإعدادات</a>
        </nav>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="content">
        {/* الشريط العلوي */}
        <div className="top-ba">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input type="text" className="search-input" placeholder="بحث عن الملفات..." />
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        

        {/* عنوان القائمة */}
        <h2 className="table-title">قائمة الملفات</h2>

        <div className="add-file-container">
          <button className="add-file-button">
            <FaPlus /> إضافة ملف جديد
          </button>
        </div>

        {/* جدول الملفات */}
        <table>
          <thead>
            <tr>
              <th>رقم الملف</th>
              <th>اسم الملف</th>
              <th>تصنيف الملف</th>
              <th>حالة الملف</th>
              <th>تاريخ إضافة الملف</th>
              <th>الخيارات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>ملف</td>
              <td>تقني</td>
              <td className="pending">جاري التحميل</td>
              <td>03/20/2025</td>
              <td className="actions">
                <FaEye className="icon view" />
                <FaEdit className="icon edit" />
                <FaTrash className="icon delete" />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>ملف</td>
              <td>ترفيهي</td>
              <td className="completed">تم التحميل</td>
              <td>03/20/2025</td>
              <td className="actions">
                <FaEye className="icon view" />
                <FaEdit className="icon edit" />
                <FaTrash className="icon delete" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FileList;
