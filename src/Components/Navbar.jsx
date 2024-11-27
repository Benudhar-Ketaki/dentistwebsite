import React, { useState } from "react";
import "./Navbarstyle.css";
import { Link } from "react-router-dom";

function Navbar() {


  return (
    <>
      <header>
      <nav>
        <div className="top">
          <div className="lside"> <ul>
            <li><i class="fa-solid fa-phone"></i>(+123)456 78900</li>
            <li>|</li>
            <li><i class="fa-regular fa-clock"></i> Mon-Sat:8.00Am to 9.00Pm,Sunday-Closed</li>
            </ul></div>
          <div className="rside"></div>
         <ul>
          <li>Follow Us</li>
          <li><i class="fa-brands fa-facebook"></i></li>
          <li><i class="fa-brands fa-x-twitter"></i></li>
          <li><i class="fa-brands fa-instagram"></i></li>
          <li></li>
         </ul>
        </div>

        <div className="bottom">
          <div className="left"><Link to="/">DentalCare</Link></div>
          <div className="right">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Service">Services</Link>
               
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
            </ul>
          </div>
          <Link to="/Contact" className="btn">Contact Us</Link>
        </div>
      </nav>
    </header>

    </>
  );
}

export default Navbar;
