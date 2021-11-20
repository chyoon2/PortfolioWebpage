import React from "react";
import Hero from "./Hero";
import Content from "./Content";
import Contact from "./Contact";
import Fire from "../Fire";
import Intro from "./Intro";

const Home = ({ setMoon, moon }) => {
  const renderPage = () => {
    if (moon === "moon-on") {
      console.log("call");
      return (
        <>
          <Intro />
          <Content />
          {/* <Contact /> */}
        </>
      );
    }
  };
  return (
    <div>
      <Fire setMoon={setMoon} moon={moon} />
      {/* <Hero /> */}
      {renderPage()}
    </div>
  );
};

export default Home;
