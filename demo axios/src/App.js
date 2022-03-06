import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { useWindowWidth, useInput, useDocumentTitle } from "./customHooks";
import axiosClient from "./api";

const fetchAPI = () => {
  try {
    axiosClient.get("api/products").then((res) => {
      console.log(res);
    });
  } catch (error) {
    console.log(error);
  }
};

const addProduct = () => {
  try {
    axiosClient
      .post("api/products", {
        name: "Mary",
        price: "100",
      })
      .then((res) => {
        console.log(res);
      });
  } catch (error) {
    console.log(error);
  }
};

function App() {
  const width = useWindowWidth();
  const productName = useInput("Mary");
  useDocumentTitle("ABC");

  return (
    <>
      <div>{width}</div>
      <input {...productName}></input>
      <button onClick={() => addProduct()}>Add</button>
    </>
  );
}

export default App;
