import React from "react";
import "./FileList.css";
import { FaTrash, FaEdit, FaEye } from "react-icons/fa";

const files = [
  { id: 1, name: "ملف", category: "تقني", status: "جاري التسجيل", date: "03/20/2025" },
  { id: 2, name: "ملف", category: "إداري", status: "تم التسجيل", date: "03/20/2025" },
  { id: 3, name: "ملف", category: "تقني", status: "تم التسجيل", date: "03/20/2025" },
  { id: 4, name: "ملف", category: "تقني", status: "تم التسجيل", date: "03/20/2025" },
  { id: 5, name: "ملف", category: "إداري", status: "تم التسجيل", date: "03/20/2025" },
];

const FileList = () => {
  return (
    <div className="file-list-container">
      <button className="add-file-button">+ إضافة ملف جديد</button>
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
          {files.map((file) => (
            <tr key={file.id}>
              <td>{file.id}</td>
              <td>{file.name}</td>
              <td>{file.category}</td>
              <td className={file.status === "جاري التسجيل" ? "pending" : "completed"}>{file.status}</td>
              <td>{file.date}</td>
              <td className="actions">
                <FaEye className="icon view" />
                <FaEdit className="icon edit" />
                <FaTrash className="icon delete" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileList;
