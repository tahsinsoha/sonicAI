import React, { Component, useEffect } from "react";
import fileUpload from "music\src\components"
import "./App.css";

function App() {
    
//   useEffect(() => {
//     // POST request using fetch inside useEffect React hook
//     const requestOptions = {
//         method: 'POST',
//         Headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({ title: 'React Hooks POST Request Example' })
//     };
//     fetch('http://localhost:5000/predict', requestOptions)
//         .then(response => console.log(response.json()));

// // empty dependency array means this effect will only run once (like componentDidMount in classes)
// }, []);

  return (
    <div classname="App">
      <fileUpload/>
      </div>
      
  );
}

export default App;