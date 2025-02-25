import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import Features from "./components/Features/Features";
import InfoBox from "./components/InfoBox/InfoBox";
import Login from "./components/Login/Login"; 
import Signup from "./components/Signup/Signup"; 
import Dashboard from "./components/Dashboard/Dashboard"; // استيراد صفحة Dashboard

function App() {
  const [currentPage, setCurrentPage] = useState("main");

  const renderPage = () => {
    if (currentPage === "main") {
      return (
        <>
          <MainSection />
          <Features />
          <InfoBox />
        </>
      );
    } else if (currentPage === "features") {
      return <Features />;
    } else if (currentPage === "infobox") {
      return <InfoBox />;
    } else if (currentPage === "login") {
      return <Login setCurrentPage={setCurrentPage} />;
    } else if (currentPage === "signup") {
      return <Signup setCurrentPage={setCurrentPage} />;
    } else if (currentPage === "dashboard") {
      return <Dashboard />;
    } else {
      return (
        <>
          <MainSection />
          <Features />
          <InfoBox />
        </>
      );
    }
  };

  return (
    <div className="App">
      {currentPage !== "login" && currentPage !== "signup" && currentPage !== "dashboard" && (
        <Header setCurrentPage={setCurrentPage} />
      )}
      {renderPage()}
    </div>
  );
}

export default App;