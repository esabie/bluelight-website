import React from "react";

import Setting1 from "../../assets/img/building.jpg";
import Setting2 from "../../assets/img/building-back.jpg";
import Setting3 from "../../assets/img/building8.jpg";
import Setting4 from "../../assets/img/building6.jpg";

import "../RehabSettingSection.css";

export default function RehabilitationSettingSection() {
  return (
    <section className="setting-wrapper">
      <div className="setting-container">

        {/* GRID */}
        <div className="setting-grid">

          {/* LEFT LARGE IMAGE */}
          <div className="setting-left">
            <img src={Setting1} alt="Setting Exterior" className="setting-main-img" />
          </div>

          {/* RIGHT TEXT */}
          <div className="setting-right">
            <h2 className="setting-title">Setting</h2>

            <p className="setting-text">
              The accommodation is designed to promote calmness, comfort, and dignity,
              with 24-hour staffing supervision and therapeutic spaces that support daily recovery.
              Our rehabilitation model blends trauma-informed practice, Positive Behaviour Support (PBS),
              and personalised recovery planning.
            </p>

            {/* ROW OF IMAGES */}
            <div className="setting-small-images">
              <img src={Setting2} className="setting-small-img" alt="Setting 2" />
              <img src={Setting3} className="setting-small-img" alt="Setting 3" />
              <img src={Setting4} className="setting-small-img" alt="Setting 4" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
