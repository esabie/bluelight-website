import React from "react";
import AboutDriveImage1 from "../../assets/img/drive3.jpg";
import AboutDriveImage2 from "../../assets/img/drive4.jpg";
import "../WhatDrivesUs.css";

export default function WhatDrivesUs() {
  return (
    <section className="about-wrapper">
      <div className="about-container">
        
        {/* LEFT IMAGE */}
        <div className="wd-text">
          <h4>WHAT DRIVES US</h4>

          <p>
            At Bluelight, we do not just provide healthcare services we live and
            breathe them. With years of frontline experience across both
            clinical and community settings, we understand the real-world
            challenges that define modern care delivery. From the fast-paced
            urgency of hospital wards to the quiet, complex needs of individuals
            in their own homes, we recognise that no two care environments and
            no two people are ever the same.
          </p>

          <p>
            Our nurses, support workers, and homecare professionals are more
            than just highly trained, they are compassionate, resilient, and
            deeply committed to making a meaningful difference. They are the
            heartbeat of Bluelight and the reason so many families,
            commissioners, and clinical teams place their trust in us. We also
            understand that good care is not just about clinical skill, it is
            about listening, adapting, and being truly present. That is why we
            do not believe in one-size-fits-all solutions. We tailor every
            package, every placement, and every interaction around the person,
            their preferences, and their goals.
          </p>

          <p>
            Whether it is a few hours of companionship each week, complex
            support in the home, or round-the-clock staffing for a young person
            in crisis our approach is the same: responsive, respectful, and
            rooted in real care. This is what person-centred support means to
            us, and it is what we deliver, every single day.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <div className="wd-images">
          <img src={AboutDriveImage1} alt="Supported Living" />

        </div>
        </div>
      </div>
    </section>
  );
}

