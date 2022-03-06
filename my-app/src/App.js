import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
//useEffect
//useState

function App() {
  const name = useInput("");
  const age = useInput("");

  return (
    <>
      <label>Name</label>
      <input type="text" {...name} />
      <label>Age</label>
      <input type="text" {...age} />
    </>
  );
}

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

export default App;
