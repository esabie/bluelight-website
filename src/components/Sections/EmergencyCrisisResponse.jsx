import React from "react";
import AboutDriveImage1 from "../../assets/img/emerg.jpg";
import ServiceHomecareImage from "../../assets/img/serviceshome.jpg";
import "../ServicesPage.css";

export default function EmergencyCrisisResponse() {
  return (
    <section className="svc-wrapper">
      <div className="svc-card">

        {/* HERO IMAGE */}
        <div className="svc-hero-image">
          <img
            src={AboutDriveImage1}
            alt="Homecare Services"
          />
        </div>

        {/* TEXT SECTION */}
        <div className="svc-text">
          <h2>EMERGENCY CRISIS RESPONSE</h2>

          <p>
            When the unexpected happens, time matters. Care arrangements can break down suddenly, hospital discharges can be arranged at short notice, and
            safeguarding risks can escalate in moments. In these critical situations, Bluelight Healthcare’s Emergency Crisis Response Team is ready to act 24/7,
            nationwide.
          </p>

          <p>
            We are trusted by local authorities, NHS teams, and private clients to respond rapidly and effectively when urgent intervention is needed. Our goal is not
            just to fill a gap, but to stabilise the situation, protect the individual, and create a clear path forward.
          </p>
        </div>

      </div>
    </section>
  );
}
