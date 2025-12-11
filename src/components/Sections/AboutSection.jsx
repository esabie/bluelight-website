import React from "react";
import AboutImage from "../../assets/img/about-section.jpg";
import "../AboutUsSection.css";

export default function AboutUsSection() {
  return (
    <section className="about-wrapper">
      <div className="about-container">
        
        {/* LEFT IMAGE */}
        <div className="about-image">
          <img src={AboutImage} alt="Care Staff" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <h4 className="about-subtitle">ABOUT US</h4>
          <h2 className="about-title">
            Our Story - Passionate About People. Committed to Care.
          </h2>

          <p>
            We believe that great care starts with great people. That is why we invest heavily in 
            sourcing, training, and supporting the best local talent, from registered nurses and 
            support workers to crisis response teams and homecare specialists. Our staff are not 
            just highly skilled, they are deeply committed to making a difference in every shift, 
            every home, and every individual they support.
          </p>

          <p>
            Whether we are responding to an urgent call for overnight support, mobilising a team 
            for a vulnerable child in crisis, or helping a family care for a loved one at home, 
            we show up with purpose, professionalism, and compassion.
          </p>

          <p>
            We do not see ourselves as just a provider. We see ourselves as partners in care. 
            Our strength lies in our people, and our commitment is to always act in service of 
            those who trust us with their most important needs. Bluelight is proud to work 
            alongside NHS trusts, local authorities, care homes, and private individuals to 
            deliver safe, dignified, and high-quality care, wherever and whenever it is needed most.
          </p>

          <p className="about-quote">
            “The best way to find yourself is to lose yourself in the service of others.” 
            – Mahatma Gandhi
          </p>
        </div>
      </div>
    </section>
  );
}