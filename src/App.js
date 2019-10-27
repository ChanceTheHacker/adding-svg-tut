import React from "react";
import logo from "./images/donut.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Step right up! Read all about it!</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
