import { Box } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import "../styles/Video.css";
const CustomPlayer = () => {
  const boxes = document.querySelectorAll(".react-player__shadow");

  boxes.forEach((box) => {
    box.remove();
  });
  const videoEntries = [
    {
      src: "https://images.unsplash.com/photo-1685313836995-c9218a4f3d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      url: "https://www.youtube.com/watch?v=oUFJJNQGwhk",
    },
    {
      src: "https://images.unsplash.com/photo-1685313836995-c9218a4f3d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      url: "https://www.youtube.com/watch?v=oUFJJNQGwhk",
    },
    {
      src: "https://images.unsplash.com/photo-1685313836995-c9218a4f3d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      url: "https://www.youtube.com/watch?v=oUFJJNQGwhk",
    },
    {
      src: "https://images.unsplash.com/photo-1685313836995-c9218a4f3d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      url: "https://www.youtube.com/watch?v=oUFJJNQGwhk",
    },
    {
      src: "https://images.unsplash.com/photo-1685313836995-c9218a4f3d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      url: "https://www.youtube.com/watch?v=oUFJJNQGwhk",
    },
    {
      src: "https://images.unsplash.com/photo-1685313836995-c9218a4f3d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      url: "https://www.youtube.com/watch?v=oUFJJNQGwhk",
    },
    {
      src: "https://images.unsplash.com/photo-1685313836995-c9218a4f3d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      url: "https://www.youtube.com/watch?v=oUFJJNQGwhk",
    },
    {
      src: "https://images.unsplash.com/photo-1685313836995-c9218a4f3d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      url: "https://www.youtube.com/watch?v=oUFJJNQGwhk",
    },
    {
      src: "https://images.unsplash.com/photo-1685313836995-c9218a4f3d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      url: "https://www.youtube.com/watch?v=oUFJJNQGwhk",
    },
    {
      src: "https://images.unsplash.com/photo-1685313836995-c9218a4f3d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      url: "https://www.youtube.com/watch?v=oUFJJNQGwhk",
    },
    {
      src: "https://images.unsplash.com/photo-1685313836995-c9218a4f3d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      url: "https://www.youtube.com/watch?v=oUFJJNQGwhk",
    },
    {
      src: "https://images.unsplash.com/photo-1685313836995-c9218a4f3d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      url: "https://www.youtube.com/watch?v=oUFJJNQGwhk",
    },
    {
      src: "https://images.unsplash.com/photo-1685313836995-c9218a4f3d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      url: "https://www.youtube.com/watch?v=oUFJJNQGwhk",
    },
    {
      src: "https://images.unsplash.com/photo-1685313836995-c9218a4f3d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      url: "https://www.youtube.com/watch?v=oUFJJNQGwhk",
    },
    {
      src: "https://images.unsplash.com/photo-1685313836995-c9218a4f3d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      url: "https://www.youtube.com/watch?v=oUFJJNQGwhk",
    },
    {
      src: "https://images.unsplash.com/photo-1685313836995-c9218a4f3d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      url: "https://www.youtube.com/watch?v=oUFJJNQGwhk",
    },
    {
      src: "https://images.unsplash.com/photo-1685313836995-c9218a4f3d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      url: "https://www.youtube.com/watch?v=oUFJJNQGwhk",
    },
    {
      src: "https://images.unsplash.com/photo-1685313836995-c9218a4f3d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      url: "https://www.youtube.com/watch?v=oUFJJNQGwhk",
    },
    {
      src: "https://images.unsplash.com/photo-1685313836995-c9218a4f3d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      url: "https://www.youtube.com/watch?v=oUFJJNQGwhk",
    },
  ];
  return (
    <div className="video_content_container" id="scrollbar1">
      {videoEntries?.map((item) => (
        <Box className="video_content">
          <ReactPlayer
            className="video_content_player"
            light={<img src={item.src} alt="Thumbnail" />}
            playing
            url={item.url}
            width="7.5vw"
            height="60px"
          />
        </Box>
      ))}
    </div>
  );
};

export default CustomPlayer;
