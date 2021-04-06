import React, { useEffect } from "react";
import "./App.css";

function App() {
    
  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin':  'http://127.0.0.1:3000',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization' },
        body: JSON.stringify({ title: 'React Hooks POST Request Example' })
    };
    fetch('http://localhost:5000/predict', requestOptions)
        .then(response => console.log(response.json()));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

  return (
    <div classname="App"/>
      
  );
}

export default App;