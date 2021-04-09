import React, { Component, useEffect , useState } from "react";
import FileUpload from "./component/FileUpload";
import "./App.css";
import Dropdown from "./component/DropDown";
import DropDown from "./component/DropDown";
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
  return (
    <div classname="App">
      <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Music Hub{' '}
        <span role="img" aria-label="Movie projector">
          🎥
        </span>
      </h1>
      
      <Dropdown title="Select type" items={items} selection={selection} change={(value)=> setSelection(value)} multiSelect />
    </div>
      <FileUpload selection= {selection} />
     
    </div>
  );
}

export default App;
