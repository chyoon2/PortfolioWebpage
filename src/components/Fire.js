import React from "react";
import "../css/fire.css";
import Toggle from "./Toggle";

const Fire = ({ appDong, setAppDong }) => {
  return (
    <div className='entire'>
      <div className='section-center'>
        <div className='moon'>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className='shooting-star'></div>
      <div className='shooting-star-2'></div>
      <div className='star'></div>
      <div className='star snd'></div>
      <div className='star trd'></div>
      <div className='star fth'></div>
      <div className='star fith'></div>
      <div className='star six'></div>
      <div className='star seven'></div>
      <div className='star eight'></div>
      <div className='star nine'></div>
      <div className='star ten'></div>
      <div className='star elev'></div>
      <div className='star twelv'></div>
      <div className='star thirt'></div>
      <div className='star fourt'></div>
      <div className='star fift'></div>
      <div className='star sixt'></div>
      <div className='star sevt'></div>
      <div className='star eightt'></div>

      <div className='switch-wrap'>
        <Toggle setAppDong={setAppDong} />
      </div>
    </div>
  );
};

export default Fire;

// <div className='entire'>
// <div className={`${appDong}`}>
//   <div className='section-center'>
//     <div className='moon'>
//       <div></div>
//       <div></div>
//       <div></div>
//     </div>
//     <div className='shooting-star'></div>
//     <div className='shooting-star-2'></div>
//     <div className='star'></div>
//     <div className='star snd'></div>
//     <div className='star trd'></div>
//     <div className='star fth'></div>
//     <div className='star fith'></div>
//   </div>
// </div>

// <div className='switch-wrap'>
//   <Toggle setAppDong={setAppDong} />
// </div>
// </div>
