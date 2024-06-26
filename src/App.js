import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://webdesignworld.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Svetlana Delaney
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/webdesignworld/sveta-react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://sveta-react-weather-app.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Render
          </a>
        </footer>
      </div>
    </div>
  );
}
