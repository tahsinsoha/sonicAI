import React, { Component, useEffect , useState } from "react";
import FileUpload from "./component/FileUpload";
import "./App.css";
import Dropdown from "./component/DropDown";
import "./component/animation.css";
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
  const items = [
    {
      id: 1,
      value: 'Genre',
    },
    {
      id: 2,
      value: 'Emotion',
    },
    {
      id: 3,
      value: 'Note',
    },
  ];
  const [selection, setSelection] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  return (
   
    <div className="App" img src={"https://images.unsplash.com/photo-1506157786151-b8491531f063?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"} >
      <div className="container">
      <h1 style={{ textAlign: 'start' ,color: "white" }}>
        Music Hub{' '}
        <span role="img" aria-label="Movie projector">
          🎥
        </span>
      </h1>
      </div>
      <Dropdown  className="dropdown"
      
      title="Select type" items={items} selection={selection} change={(value)=> setSelection(value)} multiSelect />

      <FileUpload selection= {selection} selectedFile= {selectedFile} up={(value)=> setSelectedFile(value)} />

      <div className="loader">
    <span className="stroke"></span>
    <span className="stroke"></span>
    <span className="stroke"></span>
    <span className="stroke"></span>
    <span className="stroke"></span>
    <span className="stroke"></span>
    <span className="stroke"></span>


     
    </div>
    </div>
  );
}

export default App;
