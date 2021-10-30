import React from "react";

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  item: {
    border: "solid .5px black",
  },
};
const Interests = () => {
  return (
    <div style={styles.container}>
      {/* <div style={styles.item}>Interests</div>
      <div style={styles.item}>Interests</div>
      <div style={styles.item}>Interests</div> */}
    </div>
  );
};

export default Interests;
