import React, { useState } from "react";

function File( {selection}) {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [answer, setAnswer] = useState("");
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();
    
    formData.append("file", selectedFile);
    if (selection.map(current => current.id === 1)) {
      fetch("http://localhost:5000/predict_genre", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          setAnswer(result.genre);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      
    }

    if (selection.map(current => current.id === 2)) {
      fetch("http://localhost:5000/predict_emotion", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          setAnswer(result.emotion);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      
    }
   
  };

  return (
    <div>
      <input type="file" name="file" onChange={changeHandler} />
      {isSelected ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate:{" "}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
      <div>
        <button onClick={handleSubmission}>Submit</button>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default File;
