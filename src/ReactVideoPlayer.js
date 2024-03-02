import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
// import "./Video.css";

import modelVideo from "./assets/POG.mp4";
import thum from "./assets/POthum.jpg";

const ReactVideoPlayer = () => {
  return (
    <div className="Div">
      <Video
        playsInline
        autoPlay
        loop
        poster={thum}
        style={{ height: "100vh" }}
        onCanPlayThrough={() => {
          console.log("out");
        }}
      >
        <source src={modelVideo} type="video/webm" />
      </Video>
    </div>
  );
};

export default ReactVideoPlayer;
