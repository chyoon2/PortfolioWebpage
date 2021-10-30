import React from "react";
import Header from "./Header";
import Interests from "./Interests";
import "../../fonts/creattionex/stylesheet.css";

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr",
    border: "solid white .5px",
  },
  logo: {
    fontSize: "100px",
    justifySelf: "center",
    color: "black",
    fontFamily: "Creattion Demo",
  },
  description: {
    fontFamily: "sans-serif",
    fontWeight: "bolder",
    justifySelf: "center",
    fontSize: "50px",
    color: "black",
  },
};

const center = () => {
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.logo} className='logo'>
        {/* <span>ChrisYoon</span> */}
      </div>
      <div style={styles.description} className='description'>
        <p>- - - - - - - - - - - - </p>
        <p>Frontend Web Developer</p>
        <p>- - - - - - - - - - - - </p>
        <span>Costco Exec Member</span>
      </div>
      <div style={styles.description}>
        <Interests />
      </div>
    </div>
  );
};

export default center;
