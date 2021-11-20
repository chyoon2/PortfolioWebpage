import React, { useRef, useEffect } from "react";
import "../css/thinkingbubble.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ThinkingBubble = () => {

const boxRef= useRef();

useEffect(()=>{
gsap.registerPlugin(ScrollTrigger);
//play pause resume reverse restart reset complete none

  gsap.to(boxRef.current, 
  {scrollTrigger:{
  trigger:".boxRef",
  toggleActions: "play none none pause",
  // start:"900px 20%",
  // end:"bottom top",
  markers:true,
  scrub:1,
  pin:true
  },
  x:800,
  rotation:360,
  ease:"none",
  duration:3
  });
});
  return (
    <div className='thinking' ref={boxRef}>
      <div className='typing'>
        <span className='circle scaling'></span>
        <span className='circle scaling'></span>
        <span className='circle scaling'></span>
      </div>
    </div>
  );
};

export default ThinkingBubble;
