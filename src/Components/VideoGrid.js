import React from "react";
import VideoCard from "./VideoCard";
import "../styles/videoGrid.css";

function VideoGrid() {
  const data = [
    { id: 1, img: "path/to/video1.jpg", title: "Video 1" },
    { id: 2, img: "path/to/video2.jpg", title: "Video 2" },
  ];

  return (
    <div className="video-grid">
      {data.map((video) => (
        <VideoCard key={video.id} img={video.img} title={video.title} />
      ))}
    </div>
  );
}

export default VideoGrid;
