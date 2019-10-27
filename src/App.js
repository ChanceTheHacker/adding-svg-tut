import React from "react";
import logo from "./images/donut.jpeg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-background">
        <div className="container">
          <h1>Step right up! Read all about it!</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
