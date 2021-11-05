import React from "react";
import Hero from "./Hero";
import Content from "./Content";
import Contact from "./Contact";
import Fire from "../Fire";

const Home = ({ setAppDong, appDong }) => {
  return (
    <div>
      <Fire setAppDong={setAppDong} appDong={appDong} />
      {/* <Hero /> */}
      <Content />
      <Contact />
    </div>
  );
};

export default Home;
