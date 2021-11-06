import React, { useState, useEffect } from "react";
import "../css/header.css";
import Navbar from "./navbar/Navbar";
import Home from "./pages/index";
import { Switch, Route } from "react-router-dom";
import about from "./pages/About";
import menu from "./pages/Menu";
import Dropdown from "./Dropdown";
import "../css/app.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [appDong, setAppDong] = useState("fire-on");
  console.log(appDong);

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
    <>
      <div className={`${appDong}`}>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route path='/' exact>
            <Home setAppDong={setAppDong} appDong={appDong} />
          </Route>

          <Route path='/menu' component={menu} />
          <Route path='/about' component={about} />
        </Switch>
      </div>
    </>
  );
};

export default App;
