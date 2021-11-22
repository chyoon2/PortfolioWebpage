import React from "react";
import TextBubble from "../TextBubble";
import ThinkingBubble from "../ThinkingBubble";

const styles = {
  intro: {
    height: "200vh",
    background: "black",
    position: "relative",
  },
};

const Intro = () => {
  return (
    <div style={styles.intro}>
      <ThinkingBubble />
      {/* <TextBubble /> */}
    </div>
  );
};

export default Intro;
