import React from "react";
import "./Footerstyle.css";

function Foter() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <hr className="bg-black-200"/>
        <div className="cont">
          <div className="box2">
            <h1 className="text-2xl font-semibold">Services</h1>
            <p className="text-s">
              <a href="">About Us</a> <br />
              <a href="">Our Services</a> <br />
              <a href="">Appointment </a><br />
              <a href="">Privacy Policy </a><br />
             <a href=""> Contact Us</a>
            </p>
          </div>
          <div className="box2">
          <h1 className="text-2xl font-semibold">Help & Supports</h1>
            <p>
              <a href="">Help Center</a> <br />
              <a href="">Our Services</a> <br />
              <a href="">Appointment </a><br />
              <a href="">Privacy Policy </a><br />
             <a href=""> Contact Us</a>
            </p>
          </div>
          <div className="box2">
          <h1 className="text-2xl font-semibold">Useful Links</h1>
            <p>
              <a href="">Privacy Policy </a> <br />
              <a href="">Terms of Service</a> <br />
              <a href="">Affiliate Program</a><br />
              <a href="">Reviews</a><br />
             <a href="">Payment Methods</a>
            </p>
          </div>
          <div className="box2">
          <h1 className="text-2xl font-semibold">Working Hours</h1>
            <p>
            Mon-Wed:8am-8pm <br />
              Thurs:9am-6pm <br />
              Fri:9am-5pm<br />
              Sat:9am-4pm<br />
             Sun:Closed
            </p>
          </div>
        </div>
        <div className="box1">Copyright &copy; 2024 All Right Reserved</div>
      </div>
    </footer>
  );
}

export default Foter;
