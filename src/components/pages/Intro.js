import React from "react";
import TextBubble from "../TextBubble";
import ThinkingBubble from "../ThinkingBubble";

const Intro = () => {
  return (
    <div className='h-screen relative bg-yellow-500'>
      <ThinkingBubble />
      <TextBubble />
    </div>
  );
};

export default Intro;
