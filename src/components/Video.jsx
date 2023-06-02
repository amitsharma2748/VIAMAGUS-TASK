import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import CustomPlayer from "./customPlayer";
import "../styles/Video.css";
const Video = () => {
  const [show, setShow] = useState(false);

  if (show) {
    const boxes = document.querySelectorAll(".react-player__shadow");

    boxes.forEach((box) => {
      box.remove();
    });
  }
  return (
    <div className="video">
      <Box>
        <ReactPlayer
          playing
          url={["https://www.youtube.com/watch?v=oUFJJNQGwhk"]}
          width="100vw"
          height="80vh"
        />
      </Box>
      <Box
        height={"150px"}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {show ? (
          <CustomPlayer />
        ) : (
          <Typography
            textAlign={"center"}
            marginTop={"20px"}
            color={"GrayText"}
            fontSize={"30px"}
          >
            Hover Over Here to Catch Similar Videos
          </Typography>
        )}
      </Box>
    </div>
  );
};

export default Video;
