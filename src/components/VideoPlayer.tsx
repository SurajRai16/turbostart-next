"use client";
import ReactPlayer from "react-player";

interface props {
  videoLink?: string;
}

const VideoPlayer = ({ videoLink }: props) => {
  return (
    <div>
      {" "}
      <ReactPlayer
        url={videoLink}
        playing={true}
        controls={true}
        pip={true}
        stopOnUnmount={true}
      />
    </div>
  );
};

export default VideoPlayer;
