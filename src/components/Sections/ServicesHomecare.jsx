import React from "react";
import ServiceHomecareImage from "../../assets/img/serviceshome.jpg";
import "../ServicesPage.css";

export default function ServicesHomeCare() {
  return (
    <section className="svc-wrapper">
      <div className="svc-card">

        {/* LEFT MENU */}
        {/* <div className="svc-menu">
          <h3>Our Services</h3>
          <ul>
            <li>Specialist Recruitment</li>
            <li className="active">Homecare Services</li>
            <li>Emergency Crisis Response</li>
            <li>Supported living Services</li>
            <li>Rehabilitation Services</li>
          </ul>
        </div> */}

        {/* HERO IMAGE */}
        <div className="svc-hero-image">
          <img
            src={ServiceHomecareImage}
            alt="Homecare Services"
          />
        </div>

        {/* TEXT SECTION */}
        <div className="svc-text">
          <h2>HOME CARE SERVICES</h2>

          <p>
            At Bluelight Healthcare we believe that home is more than just a place, 
            it is a source of comfort, familiarity, and security. Our bespoke home care 
            packages are designed to allow individuals to remain where they feel most at ease 
            while receiving the right level of professional care and support to meet their 
            physical, emotional, and social needs.
          </p>

          <p>
            Every care plan is tailored to the person’s unique health requirements, lifestyle 
            preferences, and personal goals, ensuring the right balance of independence and 
            support.
          </p>

          <p>
            We understand that staffing is not simply about filling vacancies, it is about 
            ensuring the right fit for the client, the team, and the individual being supported. 
            That is why our recruitment process is robust and values-driven:
          </p>
        </div>

      </div>
    </section>
  );
}
