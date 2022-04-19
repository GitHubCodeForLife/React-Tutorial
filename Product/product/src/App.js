import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import data from "./data.json";

function App() {
  const yourHTML = data[1].html;
  return (
    <>
      <h1>Test</h1>
      <div dangerouslySetInnerHTML={{ __html: yourHTML }}></div>
    </>
  );
}

export default App;
