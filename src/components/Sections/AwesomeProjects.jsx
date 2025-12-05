import React from "react";
import "../AwesomeProjects.css";
import ProjectImg from "../../assets/img/awesome2.jpg"; // update your image path

export default function AwesomeProjects() {
  return (
    <section className="awesome-wrapper">
      <div className="awesome-image-container">
        <img src={ProjectImg} alt="Awesome Project" className="awesome-image" />
        <h2 className="awesome-title">Our Awesome Projects</h2>
      </div>

      <p className="awesome-text">
        Bluelight Awesome Project is our dedicated promise that no matter how complex your care needs may be, 
        you deserve to live a meaningful, safe, and comfortable life in the place you call home. 
        This specialised programme brings together seamless, compassionate, and expertly coordinated support 
        for every stage of your family’s journey, ensuring you never experience gaps, delays, or fragmented care.
      </p>
    </section>
  );
}
