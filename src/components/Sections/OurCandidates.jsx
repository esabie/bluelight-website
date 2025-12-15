import React from "react";
import heroImg from "../../assets/img/specialistt-section.jpg";
import docImg from "../../assets/img/recruitment.jpg";
import nurseImg from "../../assets/img/recruitment2.jpg";
import careImg from "../../assets/img/recruitment4.jpg";
import "../OurCandidates.css";

export default function OurCandidates() {
  return (
    <div className="candidates-page">
      
      {/* HERO */}
      <section
        className="candidates-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay">
          <h1>Our Candidates</h1>
          <p>
            Home <span>›</span> Our Candidates
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="candidates-section">
        <div className="candidates-grid">

          <div className="candidate-card">
            <img src={docImg} alt="Doctors" />
            <h3>Doctors and Consultants</h3>
            <p>
              With inspiration from our Medical Director, we work tactically
              with NHS & Private Trusts to place doctors in posts that match
              their exclusive skills and desires with the demands of the client.
            </p>
            <a href="/">Read More →</a>
          </div>

          <div className="candidate-card">
            <img src={nurseImg} alt="Nursing" />
            <h3>Nursing & Healthcare</h3>
            <p>
              We offer exclusive NHS & private nursing opportunities through a
              vast range of priority contracts, which span all nursing and
              healthcare professions throughout the UK.
            </p>
            <a href="/">Read More →</a>
          </div>

          <div className="candidate-card">
            <img src={careImg} alt="Primary Care" />
            <h3>Primary Care</h3>
            <p>
              We recruit the top medical and healthcare staff in the country
              into the NHS and Private Health Care organisations, including GP
              Surgeries, Out of Hours (OOH), Urgent Care (UCC) / Walk-in Clinics.
            </p>
            <a href="/">Read More →</a>
          </div>

          <div className="candidate-card">
            <img src={careImg} alt="Allied Health" />
            <h3>Allied Health</h3>
            <p>
              Allied Health Professionals have unrivalled job opportunities, 
              both within the NHS and Private Sectors. We are looking to be in 
              partnership with CCS (formerly GPS), CPP (formerly LPP) and HTE..
            </p>
            <a href="/">Read More →</a>
          </div>

          <div className="candidate-card">
            <img src={careImg} alt="Register" />
            <h3>Register</h3>
            <p>
              Quick registration. Register with us today and start your career 
              as a locum medical and healthcare professional. Simply CLICK the 
              link below and let us take care of the rest.
            </p>
            <a href="/">Read More →</a>
          </div>

          <div className="candidate-card">
            <img src={careImg} alt="Refer" />
            <h3>Refer a friend</h3>
            <p>
              Quick registration. Register with us today and start your career as 
              a locum medical and healthcare professional. Simply CLICK the link 
              below and let us take care of the rest.
            </p>
            <a href="/">Read More →</a>
          </div>

        </div>
      </section>
    </div>
  );
}
