import React from "react";
import { Link } from "react-router-dom";
import caferacer from "../img/caferacer.png";
import "../css/hero.css";

const Hero = () => {
  return (
    <div id='hero'>
      <div class='caferacer'>
        <img alt='' class='imageSpin' src={caferacer} />
      </div>
    </div>
  );
};

export default Hero;

// {
/* <div className='bg-white h-screen flex flex-col justify-center items-center'>
      <h1 className='hover:scale-50 lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14'>
        Web Dev
      </h1>
      <Link
        to='/'
        onclick={() => {
          console.log("help");
        }}
        className='py-3 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce '>
        Projects
      </Link>
    </div> */
// }
