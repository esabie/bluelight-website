import React from "react";
import RehabAboutImg from "../../assets/img/rehab-about.jpg"; 
import "../RehabilitationAbout.css";

export default function RehabilitationAbout() {
  return (
    <section className="rehab-wrapper">
      <div className="rehab-container">

        {/* IMAGE */}
        <img 
          src={RehabAboutImg} 
          alt="Rehabilitation Service"
          className="rehab-image"
        />

        {/* TITLE */}
        <h2 className="rehab-title">About the Service</h2>

        {/* TEXT */}
        <p className="rehab-text">
          Bluelight Healthcare's Open Rehabilitation Service provides a structured, safe, 
          and supportive residential environment for adults who require a step-down pathway 
          from hospital or secure care. Located in Hawkinge, Kent, the service offers a 
          homely, non-secure setting where individuals can rebuild confidence, stabilise 
          their wellbeing, and transition toward meaningful community living.
        </p>

      </div>
    </section>
  );
}
