import React, { useRef, useEffect, useState } from "react";
import "../css/thinkingbubble.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ThinkingBubble = () => {
  const [toggle, setToggle] = useState(true);
  const [nextMsg, setNextMsg] = useState(true);
  // const [counter, setCounter] = useState(true);
  const thinkRef = useRef(null);
  const circleRef = useRef(null);

  const thing = () => {
    setTimeout(() => {
      console.log("thing called");

      setToggle(!toggle);
      console.log(toggle);
    }, 3000);
  };

  useEffect(() => {
    // gsap.from(typeRef.current, { opacity: 0, duration: 3 });
    gsap.registerPlugin(ScrollTrigger);
    //play pause resume reverse restart reset complete none

    // const tl = gsap.timeline({});
    console.log("gaspcalled");
    gsap.from(thinkRef.current, {
      scrollTrigger: {
        trigger: "thinkRef",
        start: "1100px 20%",
        end: "1100px bottom",
        toggleActions: "play none none reverse",
        markers: true,
        scrub: 1,
        pin: true,
        onEnter: () => thing(),
        // onLeave: () => thing(),
        // onEnterBack: () => thing(),
        // onLeaveBack: myLeaveFunc,
      },
      ease: "none",
      opacity: 0,
    });
    // gsap.to(thinkRef.current, { pinFixed: "fixed" });

    // gsap.fromTo(thinkRef.current, {}, {});
  }, []);

  const renderThinkingBubble = () => {
    if (!toggle) {
      console.log(toggle);
      return (
        <div className='thinking' ref={thinkRef}>
          <div className='text-bubble'>
            <span className='text-msg'>
              Hey I'm Chris. Welcome to the page!
            </span>
          </div>
        </div>
      );
    } else {
      console.log(toggle);
      return (
        <div className='thinking' ref={thinkRef}>
          <div className='typing'>
            <span className='circle scaling' ref={circleRef}></span>
            <span className='circle scaling' ref={circleRef}></span>
            <span className='circle scaling' ref={circleRef}></span>
          </div>
        </div>
      );
    }
  };
  return <>{renderThinkingBubble()}</>;
};

export default ThinkingBubble;

// tl.to(thinkRef.current, {
//   scrollTrigger: {
//     trigger: ".thinkRef",
//     toggleActions: "play none reverse pause",
//     start: "500px 20%",
//     end: "519px bottom",
//     markers: true,
//     scrub: 1,
// trigger: elem,
// onEnter: renderThinking,
// onLeave: myLeaveFunc,
// onEnterBack: renderThinking,
// onLeaveBack: myLeaveFunc,
// },
// x: 800,
// rotation: 360,
// ease: "none",
//     opacity: 0,
//   });

// scrollTrigger: {
//   trigger: "thinkRef",
//   start: "500px 20%",
//   end: "519px bottom",
//   toggleActions: "play none none reverse",
//   markers: true,
//   scrub: 1,
//   pin: true,
//   scale: 1.4,
//   duration: 3,
// },
// return (
//   <div className='text-thinking'>
//     <div className='text-bubble'>
//       <span className='text-msg'>Hey I'm Chris. Welcome to the page!</span>
//     </div>
//   </div>
// );
// };

// const typeRef = useRef(null);

// useEffect(() => {
//   if (counter % 2 === 1) {
//     const timeout = setTimeout(() => {
//       console.log("This will run every 3second!");
//       setShowBubble(false);
//       console.log("its odd,");
//       console.log(counter);
//     }, 5000);

//     return () => clearTimeout(timeout);
//   } else {
//     setShowBubble(true);
//     console.log(counter);

//     console.log("its even");
//   }
// }, [counter]);
