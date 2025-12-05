import React from "react";
import HomecareServicesFeatures1 from "../../assets/img/HomecareServices1.jpg";
import HomecareServicesFeatures2 from "../../assets/img/HomecareServices2.jpg";
import HomecareServicesFeatures3 from "../../assets/img/HomecareServices3.jpg";
import HomecareServicesFeatures4 from "../../assets/img/HomecareServices4.jpg";
import "../HomecareServicesFeatures.css";

export default function HomecareServicesFeatures() {
  return (
    <section className="features-wrapper">
      <div className="features-grid">

        {/* ------- 1. Personal Care ------- */}
        <div className="feature-item">
          <img
            src={HomecareServicesFeatures1}
            alt="Personal Care"
            className="feature-img"
          />

          <div className="feature-title">Personal Care</div>

          <div className="feature-text">
            We support with all aspects of daily living, including washing,
            dressing, grooming, continence care, and mobility assistance.
            Our approach is always respectful and dignified, ensuring that
            care is provided in a way that promotes comfort and independence.
          </div>
        </div>

        {/* ------- 2. Medication Support ------- */}
        <div className="feature-item">
          <img
            src={HomecareServicesFeatures2}
            alt="Medication Support"
            className="feature-img"
          />

          <div className="feature-title">Medication Support</div>

          <div className="feature-text">
            From simple prompts to complex regimes, we ensure medicines are
            administered safely and on time. Our staff are trained in specialist
            techniques such as PEG feeding, tracheostomy care, and epilepsy
            management, ensuring clinical safety in the home environment.
          </div>
        </div>

        {/* ------- 3. Health Monitoring ------- */}
        <div className="feature-item">
          <img
            src={HomecareServicesFeatures3}
            alt="Health Monitoring"
            className="feature-img"
          />

          <div className="feature-title">Health Monitoring</div>

          <div className="feature-text">
            We provide regular checks of vital signs, blood sugar levels, and
            overall wellbeing, as well as wound care and post-operative support.
            Our trained carers and nurses work closely with healthcare professionals
            to ensure early detection of any changes in health.
          </div>
        </div>

        {/* ------- 4. Companionship ------- */}
        <div className="feature-item">
          <img
            src={HomecareServicesFeatures4}
            alt="Companionship & Social Support"
            className="feature-img"
          />

          <div className="feature-title">Companionship & Social Support</div>

          <div className="feature-text">
            We understand the importance of mental wellbeing and social connection.
            Our carers offer companionship, help clients stay engaged in hobbies,
            accompany them to appointments or social activities, and encourage
            participation in community life, helping to combat loneliness and
            isolation.
          </div>
        </div>

      </div>
    </section>
  );
}
