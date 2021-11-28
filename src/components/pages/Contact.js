import React, { useState, useEffect } from "react";
import profilePic from "../../img/profilePic.jpg";
import "../../css/index.css";
import { Link } from "react-router-dom";

const styles = {
  image: {
    height: "500px",
    width: "500px",
    justifySelf: "left",
    border: "solid white 3px",
    borderRadius: "50%",
    position: "absolute",
  },
  large: {
    position: "absolute",
    fontSize: "44px",
    color: "white",
    textShadow: "1px 1px 0px black",
    paddingLeft: "5px",
    paddingRight: "10px",
    justifySelf: "center",
    fontWeight: "bold",
  },
};

const Contact = () => {
  // const [contact, setContact] = useState(null);

  // useEffect(() => {
  //   const isSize = () => {
  //     if (window.innerWidth < 768) {
  //       setContact(styles.small);
  //     } else if (window.innerWidth > 768 && window.innerWidth < 1024) {
  //       setContact(styles.medium);
  //     } else if (window.innerWidth > 1024) {
  //       setContact(styles.large);
  //     }
  //   };
  //   window.addEventListener("resize", isSize);
  //   return () => {
  //     window.removeEventListener("resize", isSize);
  //   };
  // });

  return (
    <>
      <div
        id='contact'
        className=' relative h-screen w-screen grid justify-center items-center'>
        <div
          id='blackbox'
          className='bg-black h-3/6 w-screen self-center'></div>

        <img style={styles.image} alt='' src={profilePic} />
        <div style={styles.large}>CONTACT</div>
        <Link
          type='button'
          id='email'
          style={styles.email}
          value='chy.yoon@gmail.com'
          onClick={(e) => {
            window.location = "mailto:chy.yoon@gmail.com";
            e.preventDefault();
          }}>
          chy.yoon@gmail.com
        </Link>
      </div>
    </>
  );
};

export default Contact;
