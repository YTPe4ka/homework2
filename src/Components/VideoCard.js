import React from "react";
import "../styles/videoCard.css";
import hello from "../assets/Images.png"

function VideoCard({ img, title }) {
  return (
    <div className="video-card">
      <img src={hello} alt="thumbnail" />
      <h4>{title}</h4>

      <img src={hello} alt="thumbnail" />
      <h4>{title}</h4>
    
      <img src={hello} alt="thumbnail" />
      <h4>{title}</h4>
    </div>
  );
}

export default VideoCard;
