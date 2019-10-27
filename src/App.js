import React from "react";
import ad from "./images/donut.jpeg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-background">
        <div className="container">
          <h1 className="title">Peppy Donuts</h1>
          <h2 className="subtitle">The donuts that make you GO NUTS!</h2>
          <img src={ad} className="App-ad" alt="ad" />
        </div>
      </header>
    </div>
  );
}

export default App;
