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
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Svetlana Delaney
          </a>{" "}
          and is{" "}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="/"
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
