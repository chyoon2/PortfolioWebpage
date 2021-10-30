import React from "react";
import "../css/header.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Hero />
    </div>
  );
};

export default App;
