import React, { Component, useEffect } from "react";
import FileUpload from "./component/FileUpload";
import "./App.css";

function App() {
<<<<<<< Updated upstream
  //   useEffect(() => {
  //     // POST request using fetch inside useEffect React hook
  //     const requestOptions = {
  //         method: 'POST',
  //         Headers: {'Content-Type': 'application/json'},
  //         body: JSON.stringify({ title: 'React Hooks POST Request Example' })
  //     };
  //     fetch('http://localhost:5000/predict', requestOptions)
  //         .then(response => console.log(response.json()));
=======
    
  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ title: 'React Hooks POST Request Example' }) // js object {title} ke
    };
    fetch('http://localhost:5000/predict', requestOptions)
        .then(response => console.log(response.json()));
>>>>>>> Stashed changes

  // // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, []);

  return (
    <div classname="App">
      <FileUpload />
    </div>
  );
}

export default App;
