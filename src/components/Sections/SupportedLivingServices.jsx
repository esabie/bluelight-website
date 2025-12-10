import React from "react";
import SupportedLivingImg from "../../assets/img/supportedLiving1.jpg";
import "../SupportedLiving.css";

export default function SupportedLiving() {
  return (
    <section className="sl-wrapper">
      <div className="sl-container">

        {/* LEFT MENU */}
        {/* <div className="sl-menu">
          <h3>Our Services</h3>
          <ul>
            <li>Specialist Recruitment</li>
            <li>Homecare Services</li>
            <li>Emergency Crisis Response</li>
            <li className="active">Supported living Services</li>
            <li>Rehabilitation Services</li>
          </ul>
        </div> */}

        {/* IMAGE */}
        <div className="sl-image-box">
          <img src={SupportedLivingImg} alt="Supported Living" />
        </div>
      </div>

      {/* TEXT CONTENT */}
      <div className="sl-text-section">
        <h2>SUPPORTED LIVING SERVICES</h2>

        <p>
          At Bluelight Healthcare, we believe that everyone has the right to live in a safe,
          comfortable, and empowering environment, regardless of their support needs.
          Our Supported Living services are built around individual choice, dignity,
          and independence, providing the right level of assistance so people can live the
          life they want, on their own terms.
        </p>
      </div>
    </section>
  );
}
