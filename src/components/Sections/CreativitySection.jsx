import React from "react";
import creativityImg from "../../assets/img/creativity3.jpg"; // replace with your image path
import "../CreativitySection.css";

export default function CreativitySection() {
  return (
    <section className="creativity-wrapper">
      <div className="creativity-container">
        
        {/* IMAGE */}
        <div className="creativity-image">
          <img src={creativityImg} alt="Care creativity" />
        </div>

        {/* CONTENT */}
        <div className="creativity-content">
          <h2>Our Study of Creativity</h2>

          <p>
            At Bluelight Healthcare, creativity is at the heart of how we deliver
            safe, person-centred and innovative care. We use creative thinking
            to shape personalised care plans, enhance communication, and support
            individuals with complex physical, emotional and behavioural needs.
            Creativity enables us to respond flexibly, think therapeutically,
            and design interventions that truly improve quality of life.
          </p>

          <p>
            Our teams apply creative approaches in clinical reasoning, risk
            management, communication, and daily support, helping people express
            themselves, stay engaged, and build confidence. Through reflective
            practice and continuous learning, staff are encouraged to innovate,
            problem-solve, and contribute to service improvement.
          </p>

          <p>
            We see creativity as a driver for positive change. It allows us to
            look beyond traditional methods, co-produce solutions with
            individuals and families, and design support that is meaningful,
            empowering and aligned with each person’s goals.
          </p>

          <div className="creativity-list">
            <p><strong>Aligned with CQC KLOEs:</strong></p>
            <ul>
              <li>C1 & C3: Care is personalised, and people are involved in decisions.</li>
              <li>S2: Risks are understood and managed creatively and safely.</li>
              <li>E1 & E2: Assessments are holistic and support wellbeing and independence.</li>
              <li>W3: Staff are supported to grow, learn, and innovate.</li>
              <li>R1: People experience meaningful, fulfilling support.</li>
            </ul>
          </div>

          <p className="creativity-footer">
            Creativity is not an add-on, it is part of Bluelight’s identity and
            commitment to excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
