import React from 'react';
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare
} from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className='main-nav'>
        
        {/*1st logo part */}
        <div className='logo'>
          <h2>
            <span>4</span>
            <span> M</span>ODULES
          </h2>
        </div>

        {/* 2nd menu part */}
        <div className='menu-link'>
          <ul>
            <li>
              <a href='#'>Profile Section</a>
            </li>
            <li>
              <a href='#'>Article Section</a>
            </li>
            <li>
              <a href='#'>Repository Section</a>
            </li>
            <li>
              <a href='#'>Query Section</a>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className='social-media'>
          <ul className='social-media-desktop'>
            <li>
              <a href='#' target=''>
                <FaFacebookSquare className='facebook' />
              </a>
            </li>
            <li>
              <a href='#' target=''>
                <FaInstagramSquare className='instagram' />
              </a>
            </li>
            <li>
              <a href='#' target=''> 
                <FaYoutubeSquare className='youtube' />
              </a>
            </li>
          </ul>
        </div>

      </nav>

      {/* hero section */}
      <section className='hero-section'>
        <p>Welcome To Our Project</p>
        <h1>4 MODULES</h1>
      </section>
    </>
  );
};

export default Navbar;