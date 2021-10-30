import React from "react";
import "../css/header.css";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  );
};

export default App;
