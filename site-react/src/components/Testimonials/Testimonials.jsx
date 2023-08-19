import React from 'react'
import "./Testimonials.css"
import React from "react";
import "./style.css";

const Testimonials = ({ className }) => {
  return (
    <div className={`t-moignages ${className}`}>
      <div className="overlap">
        <div className="t-moignage">
          <div className="overlap-group">
            <p className="texte">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="text-wrapper">Patient 1</div>
          </div>
          <div className="div">Témoignages</div>
        </div>
        <img className="left-arrow" alt="Left arrow" src="left-arrow.svg" />
      </div>
      <img className="right-arrow" alt="Right arrow" src="right-arrow.svg" />
    </div>
  );
};


export default Testimonials