import React from "react";

const styles = {
  container: { display: "inline-grid", gridTemplateColumns: "1fr 1fr 1fr" },
};

const Header = () => {
  return (
    <div style={styles.container}>
      <div>
        <a rel='hel' href='http://google.com'>
          work
        </a>
      </div>
      <div>
        <i class='fab fa-github'></i>
        <i class='fab fa-github'></i>
        <i class='fab fa-github'></i>
        <i class='fab fa-github'></i>
      </div>
      <div>
        <a rel='lo' href='http://google.com'>
          resume
        </a>
      </div>
    </div>
  );
};

export default Header;
