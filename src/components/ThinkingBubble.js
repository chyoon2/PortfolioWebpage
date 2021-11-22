import React, { useRef, useEffect } from "react";
import "../css/thinkingbubble.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ThinkingBubble = () => {
  const boxRef = useRef();
  const typeRef = useRef();

  useEffect(() => {
    // gsap.from(typeRef.current, { opacity: 0, duration: 3 });
    gsap.registerPlugin(ScrollTrigger);
    //play pause resume reverse restart reset complete none

    const tl = gsap.timeline();

    tl.from(boxRef.current, {
      scrollTrigger: {
        trigger: ".boxRef",
        toggleActions: "play none reverse pause",
        start: "500px 20%",
        end: "519px bottom",
        markers: true,
        scrub: 1,
        // trigger: elem,
        // onEnter: renderThinking,
        // onLeave: myLeaveFunc,
        // onEnterBack: renderThinking,
        // onLeaveBack: myLeaveFunc,
      },
      // x: 800,
      // rotation: 360,
      // ease: "none",
      opacity: 0,
    });
    tl.from(typeRef.current, {
      scrollTrigger: {
        trigger: ".boxRef",
        toggleActions: "play none reverse pause",
        start: "500px 20%",
        end: "519px bottom",
        markers: true,
        scrub: 1,
        // trigger: elem,
        // onEnter: renderThinking,
        // onLeave: myLeaveFunc,
        // onEnterBack: renderThinking,
        // onLeaveBack: myLeaveFunc,
      },
      // x: 800,
      // rotation: 360,
      // ease: "none",
      opacity: 0,
    });
  });
  return (
    <>
      <div className='thinking' ref={boxRef}>
        <div className='typing'>
          <span className='circle scaling'></span>
          <span className='circle scaling'></span>
          <span className='circle scaling'></span>
        </div>
      </div>
      <div className='text-thinking' ref={typeRef}>
        <div className='text-bubble'>
          <span className='text-msg'>Hey I'm Chris. Welcome to the page!</span>
        </div>
      </div>
    </>
  );
};

export default ThinkingBubble;
