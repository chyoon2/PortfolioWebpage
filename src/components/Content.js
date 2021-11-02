import React from "react";
import { Element } from "react-scroll";

const content = () => {
  return (
    <Element
      className='grid justify-items-center sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      id='projects'>
      <div className='card-zoom'>
        <div className='card-zoom-image'></div>
        <div className='card-zoom-image bg-insta'></div>
        <h1 className='card-zoom-text'>InstaClone</h1>
      </div>
      <div className='card-zoom'>
        <div className='card-zoom-image'></div>
        <div className='card-zoom-image bg-insta'></div>
        <h1 className='card-zoom-text'>Mobile App</h1>
      </div>
      <div className='card-zoom'>
        <div className='card-zoom-image'></div>
        <div className='card-zoom-image bg-insta'></div>
        <h1 className='card-zoom-text'>Squirrel App</h1>
      </div>
      <div className='card-zoom'>
        <div className='card-zoom-image'></div>
        <div className='card-zoom-image bg-insta'></div>
        <h1 className='card-zoom-text'>Shuber</h1>
      </div>
    </Element>
  );
};

export default content;

//  <div className=' justify-center items-center flex flex-col h-screen'> */
// }
// {
//   /* <img src={insta4} alt='' className='h-full rounded mb-20 shadow' /> */
// }
// {
//   /* <div className=' flex flex-col justify-center'>
//           <h2 className='text-2xl mb-2 hover:bg-indigo-400 hover: -translate-y-0.5 transform transition'>
//             Instagram clone
//           </h2>
//           className='flex flex-col justify-center items-center h-screen font-sans py-40
//         </div>
