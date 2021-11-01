import React from "react";
import bike from "../img/bike.png";
const content = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen font-sans py-40'>
      <img src={bike} alt='' className='h-full rounded mb-20 shadow' />
      <div className=' flex flex-col justify-center'>
        <h2 className='text-2xl mb-2'>Instagram clone</h2>
      </div>
    </div>
  );
};

export default content;
