import React, { useState } from "react";
import Player from "./Player";
import "./dropdown.css"
function File( {selection , selectedFile, up}) {
  const [isSelected, setIsSelected] = useState(false);
  const [genre, setGenre] = useState("");
  const [emotion, setEmotion] = useState("");
  const [note, setNote] = useState("");
  const changeHandler = (event) => {
    up(event.target.files[0]);
    setIsSelected(true);
    setGenre("");
    setEmotion("");
    setNote("");

  };

  const handleSubmission = () => {
    setGenre("");
    setEmotion("");
    setNote("");
    const formData = new FormData();
    
    formData.append("file", selectedFile);
    
    if (selection.some(current => current.id === 1)) {
      fetch("http://localhost:5000/predict_genre", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          setGenre("Genre: "+result.genre);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      
    }

    if (selection.some(current => current.id === 2)) {
      fetch("http://localhost:5000/predict_emotion", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          setEmotion("Emotion: "+result.emotion);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      
    }

    if (selection.some(current => current.id === 3)) {
      fetch("http://localhost:5000/predict_note", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          setNote("Note: "+result.note);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      
    }
   
  };

  return (
    <div>
      <div className="upload">
      <input type="file" name="file" className = "upload"onChange={changeHandler} />
      </div>
    
      <div>
        <div className="submit">
        <button className = "sub" onClick={handleSubmission}>Submit</button>
        </div>
        <p style={{color: "white"}}>{genre}</p>
        <p style={{color: "white"}}>{emotion}</p>
        <p style={{color: "white"}}>{note}</p>
        
      </div>
    </div>
  );
}

export default File;
