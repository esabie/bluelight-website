import React from "react";
import EmergencyCrisisResponsee from "../../assets/img/emergencyCrisisResponsee.jpg";
import "../EmergencyCrisisResponse.css";

export default function EmergencyCrisisResponse() {
  return (
    <section className="ecr-wrapper">

      <div className="ecr-content">

        {/* LEFT SIDEBAR */}
        <div className="ecr-sidebar">
          <h3>Our Services</h3>
          <ul>
            <li>Specialist Recruitment</li>
            <li>Homecare Services</li>
            <li className="active">Emergency Crisis Response</li>
            <li>Supported living Services</li>
            <li>Rehabilitation Services</li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="ecr-image-container">
          <img
            src={EmergencyCrisisResponsee}
            alt="Emergency Response"
            className="ecr-image"
          />
        </div>
      </div>

      {/* TEXT SECTION */}
      <div className="ecr-text-block">
        <h2>EMERGENCY CRISIS RESPONSE</h2>

        <p>
          When the unexpected happens, time matters. Care arrangements can break
          down suddenly, hospital discharges can be arranged at short notice, and
          safeguarding risks can escalate in moments. In these critical
          situations, Bluelight Healthcare’s Emergency Crisis Response Team is
          ready to act 24/7, nationwide.
        </p>

        <p>
          We are trusted by local authorities, NHS teams, and private clients to
          respond rapidly and effectively when urgent intervention is needed. Our
          goal is not just to fill a gap, but to stabilise the situation, protect
          the individual, and create a clear path forward.
        </p>
      </div>
    </section>
  );
}
