import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
const useAudio = (selectedFile) => {
  console.log("ashxhe");
  const [audio] = useState(new Audio(selectedFile));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {                             
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ selectedFile }) => {
  const [playing, toggle] = useAudio(selectedFile);

  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
      <ReactAudioPlayer src={selectedFile} autoPlay controls />
    </div>
  );
};

export default Player;
