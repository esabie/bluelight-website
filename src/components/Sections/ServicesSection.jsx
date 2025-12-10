import React from "react";
import ServiceSectionImage from "../../assets/img/specialistt-section.jpg";
import "../ServicesSection.css";

export default function ServicesSection() {
  return (
    <section className="svc-wrapper">
      <div className="svc-card">

        {/* LEFT MENU */}
        {/* <div className="svc-menu">
          <h3>Our Services</h3>

          <ul>
            <li className="active">Specialist Recruitment</li>
            <li>Homecare Services</li>
            <li>Emergency Crisis Response</li>
            <li>Supported Living Services</li>
            <li>Rehabilitation Services</li>
          </ul>
        </div> */}

        {/* RIGHT IMAGE */}
        <div className="svc-hero-image">
          <img src={ServiceSectionImage} alt="Specialist Recruitment" />
        </div>

        {/* TEXT BELOW IMAGE ONLY */}
        <div className="svc-text">
        <h2>Specialist Recruitment</h2>

        <p>
            Bluelight Healthcare specialises in sourcing, vetting, and placing highly 
            skilled healthcare professionals to meet the evolving needs of the NHS, 
            local authorities, private healthcare organisations, and community services.
        </p>

        <p>
            We understand that staffing is not simply about filling vacancies, it is about 
            ensuring the right fit for the client, the team, and the individual being 
            supported. That is why our recruitment process is robust and values-driven:
        </p>

        <p>
            Comprehensive Screening: Full DBS checks, reference verification, qualification validation, and right-to-work compliance.
            Skills & Competency Assessment: Each candidate undergoes clinical skills evaluations and scenario-based interviews to ensure they can handle real-world care situations.
            Specialist Pool: Access to Registered Nurses (RGN, RMN, RNLD), Support Workers, Complex Care Practitioners, and professionals trained in mental health, autism, palliative care, and paediatric support.
            Flexible Engagement: We strive for outstanding outcomes in all we do.
        </p>

        <p>
            Key Advantage: Our talent network is ready to deploy within hours, ensuring continuity of care 
            even in high-pressure or crisis situations.
        </p>
        </div>
      </div>
    </section>
  );
}
