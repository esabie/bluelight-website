import React from "react";
import "../AwesomeProjectsSection.css";

import Img1 from "../../assets/img/awesome3.jpg";
import Img2 from "../../assets/img/awesome4.jpg";
import Img3 from "../../assets/img/awesome5.jpg";

export default function AwesomeProjectsSection() {
  return (
    <section className="aps-wrapper">
      <div className="aps-images-row">
        <img src={Img1} alt="Family support" className="aps-image" />
        <img src={Img2} alt="Child learning" className="aps-image" />
        <img src={Img3} alt="Elderly support" className="aps-image" />
      </div>

      <p className="aps-text">
        The Awesome Project supports children with complex medical or developmental needs to play, learn, 
        and thrive, delivered through our specialist Paediatric Complex Care team. For adults recovering 
        from illness, injury, or life-changing events, our Rehabilitation Pathway helps restore 
        independence, build confidence, and promote long-term wellbeing.
      </p>

      <p className="aps-text">
        We provide skilled and personalised care for individuals living with Dementia, Neurodiversity, 
        Physical Disabilities, and those requiring gentle and dignified Palliative and End-of-Life support. 
        Whatever your circumstances, our goal is simple: to surround you with the right expertise, 
        compassion, and consistency, every single day.
      </p>
    </section>
  );
}
