import React from "react";
import SupportedLivingImg from "../../assets/img/supported2.jpg";
import "../SupportedLivingSection.css";


export default function SupportedLivingSection() {
  return (
    <section className="supported-wrapper">
      <div className="supported-card">
        <div className="sl-image-box">
          <img src={SupportedLivingImg} alt="Supported Living" />
        </div>

        <div className="supported-content">
          <h2>SUPPORTED LIVING SERVICES</h2>
          <p>
            At Bluelight Healthcare, we believe that everyone has the right to live in a safe,
             comfortable, and empowering environment, regardless of their support needs. Our Supported 
             Living services are built around individual choice, dignity, and independence, providing the right 
             level of assistance so people can live the life they want, on their own terms.
          </p>
        </div>
      </div>
    </section>
  );
}