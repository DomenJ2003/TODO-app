import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";

function App() {


  return (
    <div className="App">
      <Navbar/>
      <div className="main-container">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
