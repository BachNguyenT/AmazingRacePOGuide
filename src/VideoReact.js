import React from "react";
import video from "./assets/POG.mp4";
import thumbnail from "./assets/POthum.jpg";

const ReactVideoPlayer = () => {
  return (
    // <Player
    //   playsInline
    //   fluid={true}
    //   poster="./assets/POthum.jpg"
    //   src="./assets/POG.mp4"
    // />
    <div
      style={{
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <video
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        controls
        playsInline
        poster={thumbnail}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default ReactVideoPlayer;
