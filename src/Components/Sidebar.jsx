import React from "react";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>Home</li>
        <li>Subscriptions</li>
        <li>Library</li>
        <hr />
        <li>History</li>
        <li>Watch Later</li>
      </ul>
    </div>
  );
}

export default Sidebar;
