import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Jokes from "./jokes";

function App() {
  return (
    <div className="App">
      <Jokes />

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);