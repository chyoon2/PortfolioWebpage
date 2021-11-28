import React from "react";
import { Link } from "react-router-dom";
import { NavbarContainer, Nav } from "./NavbarElements";
import { Link as LinkS } from "react-scroll";
import "../../css/header.css";
import profilePic from "../../img/profilePic.jpg";

const styles = {
  nav: {},
};

const navbar = ({ toggle }) => {
  return (
    <Nav
      className='flex justify-between items-center h-44 opacity-90 absolute font-sans'
      style={{ background: "#393939" }}>
      <div className='pl-6'>
        <a href='https://github.com/chyoon2?tab=repositories' id='navy'>
          <span style={{ color: "#ADD8E6" }}>
            <i className='fab fa-github fa-2x'></i>
          </span>
        </a>
        <a
          className='pl-3'
          href='https://www.linkedin.com/in/chrisyoonseattle/'
          id='navy'>
          <span style={{ color: "#ADD8E6" }}>
            <i className='fab fa-linkedin-in fa-2x'></i>
          </span>
        </a>
        <a
          className='pl-3'
          href='https://www.instagram.com/birthday_chris'
          id='navy'>
          <span style={{ color: "#ADD8E6" }}>
            <i className='fab fa-instagram fa-2x'></i>
          </span>
        </a>
      </div>

      <div>
        <span>
          <img alt='profile' src={profilePic}></img>
        </span>
      </div>

      <div className='px-4 cursor-pointer sm:hidden' onClick={toggle}>
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='orange'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>

      <div className='pr-8 sm:block hidden '>
        <LinkS
          className='p-4 cursor-pointer'
          id='navy'
          to='projects'
          activeClass='active'
          smooth={true}
          spy={true}
          offset={-50}
          duration={500}>
          Projects
        </LinkS>
        <LinkS
          className='p-4 cursor-pointer'
          id='navy'
          to='about'
          activeClass='active'
          smooth={true}
          spy={true}
          offset={50}
          duration={500}>
          About
        </LinkS>
        <LinkS
          className='p-4 cursor-pointer'
          id='navy'
          to='contact'
          activeClass='active'
          smooth={true}
          spy={true}
          offset={50}
          duration={500}>
          Contact
        </LinkS>
        <Link className='p-4' to='/Resume' id='navy'>
          Resume
        </Link>
      </div>
    </Nav>
  );
};

export default navbar;
