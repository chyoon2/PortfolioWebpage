import React from "react";
import Header from "./Header";
import Interests from "./Interests";

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr",
  },
};

const center = () => {
  return (
    <div style={styles.container}>
      <Header />
      <div>
        <span>CY bitch</span>
      </div>
      <div>
        <span> Description about me</span>
      </div>
      <Interests />
    </div>
  );
};

export default center;
