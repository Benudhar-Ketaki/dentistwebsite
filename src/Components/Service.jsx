import React from 'react'
import './servicestyle.css'

function Service() {
  return (
    <div className="service  mt-100px" id="service">
        <div className="cont">
        <h1 className="hh1">
          Explore Our Services
        </h1>
        <div className="container">

          <div className="box">
            <span>
              <img src="/images/baces.jpg" alt="" />
            </span>
            <h1 className="text-black-300 text-3xl text-center font-bold">Braces & Aligners</h1>
            <hr />
            <p>
            Braces are the traditional method for correcting teeth alignment and bite issues. <br />
            Aligners, such as Invisalign, are clear plastic trays that gradually shift teeth into their correct positions. 
          
            </p>
          </div>

          <div className="box">
          <span>
              <img src="/images/filling.jpg" alt="" />
            </span>
            <h1 className="text-black-300 text-3xl text-center font-bold">Dental Fillings</h1>
            <hr />
            <p>
            Dental fillings are a common and effective treatment for tooth decay, and choosing the right type depends on your needs, aesthetic preferences, and budget.
            </p>
          </div>

          <div className="box">
          <span>
              <img src="/images/implant.jpg" alt="" />
            </span>
            <h1 className="text-black-300 text-3xl text-center font-bold">Dental Implants</h1>
            <hr />
            <p>

            A dental implant is a titanium post or frame surgically placed into the jawbone beneath the gums to support a replacement tooth or bridge.
            </p>
          </div>

          <div className="box">
          <span>
              <img src="/images/extraction.jpg" alt="" />
            </span>
            <h1 className="text-black-300 text-3xl text-center font-bold">Extractions</h1>
            <hr />
            <p>
            Dental extraction is often a last resort when other treatments are not viable. Whether simple or surgical, the procedure is generally safe and effective, and most people recover without complications.
            </p>
          </div>

        </div>
        </div>
      </div>
  )
}

export default Service