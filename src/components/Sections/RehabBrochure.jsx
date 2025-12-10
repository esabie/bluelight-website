import React from "react";
import "../RehabBrochure.css";
import heroImg from "../../assets/img/heroImg.jpg";      // Add images from the PDF
import aboutImg from "../../assets/img/rehab-about.jpg";
import setting1 from "../../assets/img/building.jpg";
import setting2 from "../../assets/img/building-back.jpg";
import setting3 from "../../assets/img/building2.jpg";
import setting4 from "../../assets/img/building1.jpg";
import setting5 from "../../assets/img/building3.jpg";
import setting6 from "../../assets/img/building4.jpg";
import setting7 from "../../assets/img/building5.jpg";
import setting8 from "../../assets/img/building6.jpg";
import setting9 from "../../assets/img/building7.jpg";

import teamImg from "../../assets/img/ophelia.jpg";
import governanceImg from "../../assets/img/governance.jpg";
import outcomesImg from "../../assets/img/heroImg.jpg";
import contactImg from "../../assets/img/rehab-contact.jpg";

export default function RehabBrochure() {
  return (
    <div className="rehab-wrapper">

      {/* HERO SECTION */}
      <section className="rehab-hero">
        <img src={heroImg} alt="Rehabilitation Services" />
        <h1>Open Rehabilitation Services</h1>
      </section>

      {/* ABOUT SECTION */}
      <section className="rehab-section rehab-card">
        <h2>About the Service</h2>
        <div className="rehab-img-text">
          <img src={aboutImg} alt="About the service" />
          <p>
            Bluelight Open Rehabilitation Service provides a community-based,
            non-secure residential environment for adults (18+) requiring structured
            rehabilitation and recovery support following hospital discharge or
            community placement breakdown. The service supports individuals with
            mental health conditions, neurodevelopmental disorders, learning
            disabilities, autism, or complex psychosocial needs.
          </p>
        </div>
      </section>

      {/* SETTING SECTION */}
      <section className="rehab-section rehab-card">
        <h2>Setting</h2>
        <p>
          Located in the peaceful community of Hawkinge, Kent, the service offers
          comfortable, fully equipped residential accommodation with both
          individual and shared spaces. The property is wheelchair accessible and
          includes a ground-floor bedroom for adults with mobility needs. It
          provides a safe, non-restrictive environment that promotes independence,
          community engagement, and inclusion.
        </p>

        <div className="rehab-gallery">
          <img src={setting1} alt="Setting 1" />
          <img src={setting2} alt="Setting 2" />
          <img src={setting3} alt="Setting 3" />
          <img src={setting4} alt="Setting 4" />
          <img src={setting5} alt="Setting 5" />
          <img src={setting6} alt="Setting 6" />
          <img src={setting7} alt="Setting 7" />
          <img src={setting8} alt="Setting 8" />
          <img src={setting9} alt="Setting 9" />
        </div>
      </section>

      {/* WHO WE SUPPORT */}
      <section className="rehab-section rehab-card">
        <h2>Who We Support</h2>
        <ul>
          <li>Adults transitioning from hospital, secure, or step-down placements</li>
          <li>
            Individuals with primary mental health diagnoses such as schizophrenia,
            bipolar disorder, or emotionally unstable personality disorder
          </li>
          <li>
            Adults with dual diagnoses including learning disabilities, autism, or
            mild physical disabilities
          </li>
          <li>Individuals requiring 24-hour staff support in a community setting</li>
          <li>People benefiting from a trauma-informed, recovery-focused approach</li>
        </ul>
      </section>

      {/* APPROACH SECTION */}
      <section className="rehab-section rehab-card">
        <h2>Our Approach</h2>
        <p>
          Our care is delivered under the regulated activities of Personal Care
          (RA1), Accommodation for Persons Who Require Nursing or Personal Care
          (RA2), and Treatment of Disease, Disorder or Injury (RA5). We integrate
          therapeutic, clinical, and functional rehabilitation—focusing on Positive
          Behaviour Support, trauma-informed practice, psychological recovery, and
          life-skills development. All care planning is collaborative and
          outcome-focused.
        </p>
      </section>

      {/* TEAM SECTION */}
      <section className="rehab-section rehab-card">
        <h2>Our Team</h2>
        <div className="rehab-img-text">
          <img src={teamImg} alt="Team" />
          <p>
            Our multidisciplinary team includes a Registered Manager, Clinical
            Governance Professionals, Mental Health Specialists, Occupational
            Therapists, Activity Coordinators, Recovery Workers and Rehabilitation
            Support Staff. We ensure continuous professional development,
            supervision, and competency training across the team, supported by
            24-hour on-call arrangements.
          </p>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="rehab-section rehab-card">
        <h2>Clinical & Governance Framework</h2>
        <div className="rehab-img-text">
          <img src={governanceImg} alt="Team" />
          <p>
            The Open Rehabilitation Service operates within Bluelight Rehabilitation’s Clinical
            Governance Framework, ensuring rigorous quality oversight, compliance with the CQC
            Fundamental Standards, and alignment with Right Support, Right Care, Right
            Culture principles. Regular audits, care plan reviews, and user feedback ensure
            ongoing improvement and safety.
          </p>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="rehab-section rehab-card">
        <h2>Outcomes We Promote</h2>
        <ul>
          <li>Greater independence and confidence</li>
          <li>Improved emotional regulation and daily functioning</li>
          <li>Enhanced social inclusion and community engagement</li>
          <li>Successful step-down to supported or independent living</li>
        </ul>
      </section>

      {/* CONTACT SECTION */}
      <section className="rehab-section rehab-card contact-card">
        <h2>Contact Us</h2>
        <div className="rehab-img-text">
          <img src={contactImg} alt="Contact" />
          <div>
            <p><strong>Bluelight Rehabilitation Services</strong></p>
            <p>139 Canterbury Road, Hawkinge, CT18 7AX</p>
            <p>📞 020 8233 2999 | 077 652 92198</p>
            <p>📧 info@bluelighthealthcare.com</p>
            <p>🌐 www.bluelighthealthcare.com</p>
            <p>
              We welcome referrals from NHS Integrated Care Boards (ICBs), Local
              Authorities, and hospital discharge teams.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
