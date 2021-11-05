import React, { useState } from "react";
import "../css/fire.css";
import Toggle from "./Toggle";

// const handleToggle = () => {

// const [toggle, setToggle] = useState(false);
// const toggled = toggle ? "fireOn" : "fireOff";

const Fire = () => {
  const [dong, setdong] = useState("fire-on");
  console.log(dong);

  return (
    <div className='entire'>
      <div className={`${dong}`}>
        <div class='section-center'>
          <div class='moon'>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class='shooting-star'></div>
          <div class='shooting-star-2'></div>
          <div class='star'></div>
          <div class='star snd'></div>
          <div class='star trd'></div>
          <div class='star fth'></div>
          <div class='star fith'></div>
          <div class='circle'></div>
          <div class='wood-circle'></div>
          <div class='wood'></div>
          <div class='tree-1'></div>
          <div class='tree-2'></div>
          <div class='fire'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class='smoke'>
            <span class='s-0'></span>
            <span class='s-1'></span>
            <span class='s-2'></span>
            <span class='s-3'></span>
            <span class='s-4'></span>
            <span class='s-5'></span>
            <span class='s-6'></span>
            <span class='s-7'></span>
            <span class='s-8'></span>
            <span class='s-9'></span>
          </div>
        </div>
      </div>
      <div className='switch-wrap'>
        <Toggle toggle={setdong} />
      </div>
    </div>
  );
};

export default Fire;
