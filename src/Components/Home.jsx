import React from "react";
import "./Homestyle.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    
<div className="home" id="home">
        <div className="leftside">
          <h2 className="text-blue-300">Dental Care For Everyone</h2>
          <h1>
            Smile,it Lets <br />
            Your Teeth <br />
            Breathe
          </h1>
          <Link to="/Contact" className="btn1">Contact us</Link>
        </div>
        <img src="./images/df2.jpg" alt="Dentalcare" className="image" />
      </div>

      
      <section className="team" id="team">
        <h1 className="text-blue-500 mt-7">Best Specialists</h1> <br />
        <h1 className="text-3xl text-sky-600 font-bold m-0">
          Welcome to Our Dentis Dental Clinic
        </h1>
        <div className="container">
       <div className="box">

        <div className="image bg-gray-300">
        <img src="/images/dc1.jpg" alt="" />
        </div>
        <h1 className="text-blue-800 text-lg mt-3">Dr.Michael Brown</h1>
        <h2 className="text-blue-600 text-sm m-0">Orthodontist</h2>
       </div>

       <div className="box">
       <div className="image bg-gray-300">
        <img src="/images/dc2.jpg" alt="" />
        </div>
        <h1 className="text-blue-800 text-lg mt-3">Dr.Lisa Rodriguez</h1>
        <h2 className="text-blue-600 text-sm m-0">Dental Hygienist</h2>
       </div>

       <div className="box">
       <div className="image bg-gray-300">
        <img src="/images/dc3.jpg" alt="" />
        </div>
        <h1 className="text-blue-800 text-lg mt-3">Dr.James Davis</h1>
        <h2 className="text-blue-600 text-sm m-0">Prosthodontist</h2>
       </div>

       <div className="box">
       <div className="image bg-gray-300">
        <img src="/images/dc4.jpg" alt="" />
        </div>
        <h1 className="text-blue-800 text-lg mt-3">Dr.Benjamin Luis</h1>
        <h2 className="text-blue-600 text-sm m-0">Oral Surgeon</h2>
       </div>

        </div>
      </section>

      <section className="about" id="about">
      <div className="container">
        
      <div className="box1">
        <div >
          <h1 className="mt-7 text-2xl">
          10+ <br />
          Years
          </h1>
        </div>
  <img src="/images/year.jpg" alt="" />
      </div>

      <div className="box3">
         <h1 className="text-pink-500 p-xl">Get to Know more About Us</h1> <br />
         <h1 className="text-blue-700 p-l text-4xl font-semibold">
          Welcome to Our Dentis Dental Clinic
         </h1>
         <p>
         “At Dentis Dental Clinic, our mission is to provide exceptional dental care with a compassionate touch. We believe in making every visit a comfortable and positive experience while delivering the highest standard of dental services.”
         </p>
         <p>
         “Founded in 2014 by Dr. Michail Brown, SmileBright Dental Clinic started as a small family practice with a vision to redefine dental care in our community. Over the years, we’ve expanded our services and technology while staying true to our commitment to personalised care.”
         </p>

         <button className="btn m-4">Learn More</button>
      </div>

      </div>

      </section>
</>

  );
}

export default Home;
