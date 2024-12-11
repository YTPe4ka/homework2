import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Categories from "./Components/Categories";
import VideoGrid from "./Components/VideoGrid";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <div className="main-content">
          <Categories />
          <VideoGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
