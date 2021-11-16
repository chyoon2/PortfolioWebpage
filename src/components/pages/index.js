import React from "react";
import Hero from "./Hero";
import Content from "./Content";
import Contact from "./Contact";
import Fire from "../Fire";

const Home = ({ setMoon, moon }) => {
  return (
    <div>
      <Fire setMoon={setMoon} moon={moon} />
      {/* <Hero /> */}
      <Content />
      <Contact />
    </div>
  );
};

export default Home;
