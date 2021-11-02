import React from "react";
import "../../css/header.css";
import "../../fonts/creattionex/stylesheet.css";

const styles = {
  container: {
    display: "inline-grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    marginBottom: "30px",
    marginTop: "100px",
  },
  workLink: {
    justifySelf: "left",
  },
  resumeLink: {
    justifySelf: "right",
  },
  links: {
    justifySelf: "center",
  },
};

const Header = () => {
  return (
    <div style={styles.container}>
      <div style={styles.workLink}>
        <a rel='hel' href='http://google.com'>
          {/* work */}
        </a>
      </div>
      <div style={styles.links}>
        {/* <a href='https://github.com/chyoon2?tab=repositories'>
          <i className='fab fa-github-square'></i>
        </a>
        <a href='https://www.linkedin.com/in/chrisyoonseattle/'>
          <i className='fab fa-linkedin'></i>
        </a>
        <a href='https://www.instagram.com/birthday_chris'>
          <i className='fab fa-instagram-square'></i>
        </a> */}
      </div>

      <div style={styles.resumeLink}>
        <a rel='lo' href='http://google.com'>
          {/* resume */}
        </a>
      </div>
    </div>
  );
};

export default Header;
