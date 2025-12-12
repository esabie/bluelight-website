import React from "react";
import AboutValuesImage from "../../assets/img/about-values.jpg";
import "../ValuesSection.css";

export default function ValuesSection() {
  return (
    <section className="values-wrapper">
      <div className="values-inner">

        {/* -------- TOP ROW -------- */}
        <div className="values-grid-top">

          {/* Card 1  */}
          <div className="values-card">
            <h3>Our Commitment to Quality & Safety</h3>
            <ul>
              <li>All staff are enhanced DBS checked.</li>
              <li>We maintain a robust training and supervision framework.</li>
              <li>We regularly assess and update staff skills to match client needs.</li>
              <li>We are registered with the CQC and are currently rated good.</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="values-card">
            <h3>OUR CORE VALUES</h3>
            <ul>
              <li>Compassion: We lead with empathy and kindness.</li>
              <li>Accountability: We take responsibility for the care we deliver.</li>
              <li>Respect: We honour every individual’s dignity, rights, and voice.</li>
              <li>Excellence: We strive for outstanding outcomes.</li>
              <li>Integrity: We act with honesty and transparency.</li>
              <li>Teamwork: We collaborate across disciplines and communities.</li>
              <li>
                Inclusivity: We celebrate diversity and ensure care is culturally safe.
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="values-image-box">
            <img src={AboutValuesImage} alt="Team walking" />
          </div>
        </div>

        {/* -------- BOTTOM ROW -------- */}
        <div className="values-grid-bottom">

          {/* Card 3 */}
          <div className="values-card">
            <h3>OUR MISSION</h3>
            <p>
              To change lives through high-quality, compassionate, and clinically
              safe care delivered by people who truly care. We invest in training,
              empower our teams, and work in partnership with families and the wider
              care system.
            </p>
          </div>

          {/* Card 4 */}
          <div className="values-card">
            <h3>OUR VISION</h3>
            <p>
              To be a leading provider of flexible, trusted healthcare and homecare
              services, respected for our quality, compassion, and outcomes.
            </p>
          </div>

          {/* Wide Card 5 */}
          <div className="values-card full-width">
            <p>
              Our clients include local authorities, NHS partners, private hospitals,
              and families who trust us to deliver high-quality care every time.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
