import React, { useState, useEffect } from "react";
import "../css/header.css";
import Navbar from "./navbar/Navbar";
import home from "./pages/index";
import { Switch, Route } from "react-router-dom";
import about from "./pages/About";
import menu from "./pages/Menu";
import Dropdown from "./Dropdown";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <div>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={home} />
        <Route path='/menu' component={menu} />
        <Route path='/about' component={about} />
      </Switch>
    </div>
  );
};

export default App;
