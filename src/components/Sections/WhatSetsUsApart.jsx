import React from "react";
import HomecareSetApartImage1 from "../../assets/img/Homecare_setapart1.jpg";
import HomecareSetApartImage2 from "../../assets/img/Homecare_setapart2.jpg";
import HomecareSetApartImage3 from "../../assets/img/Homecare_setapart3.jpg";
import HomecareSetApartImage4 from "../../assets/img/Homecare_setapart4.jpg";
import "../WhatSetsUsApart.css";

export default function WhatSetsUsApart() {
  return (
    <section className="ws-wrapper">

      <h2 className="ws-heading">What set us apart</h2>

      <div className="ws-grid">

        {/* ITEM 1 */}
        <div className="ws-item grey-card">
          <div className="ws-animated-bg"></div>

          <div className="ws-top-card">
            We take a holistic, team-based approach to home care. Our carers work
            hand-in-hand with families, GPs, district nurses, and allied health
            professionals to ensure seamless communication and continuity of care.
          </div>

          <img src={HomecareSetApartImage1} className="ws-img" />
        </div>

        {/* ITEM 2 */}
        <div className="ws-item grey-card">
          <div className="ws-animated-bg"></div>

          <div className="ws-top-card">
            We pride ourselves on being: Flexible – adapting care as needs change.
            Responsive – able to step in quickly when extra support is needed.
          </div>

          <img src={HomecareSetApartImage2} className="ws-img" />
        </div>

        {/* ITEM 3 */}
        <div className="ws-item grey-card">
          <div className="ws-animated-bg"></div>

          <div className="ws-top-card">
            Person-Centred – guided by the individual's preferences, dignity,
            and independence.
          </div>

          <img src={HomecareSetApartImage3} className="ws-img" />
        </div>

        {/* ITEM 4 */}
        <div className="ws-item grey-card">
          <div className="ws-animated-bg"></div>

          <div className="ws-top-card">
            Clinically Led – with oversight from experienced healthcare
            professionals to maintain safety and quality.
          </div>

          <img src={HomecareSetApartImage4} className="ws-img" />
        </div>

      </div>
    </section>
  );
}