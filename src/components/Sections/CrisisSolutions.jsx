import React from "react";
import Crisis1 from "../../assets/img/crisis1.jpg";
import Crisis2 from "../../assets/img/crisis2.jpg";
import Crisis3 from "../../assets/img/crisis3.jpg";
import Crisis4 from "../../assets/img/crisis4.jpg";
import "../CrisisSolutions.css";

export default function CrisisSolutions() {
  const cards = [
    {
      img: Crisis1,
      title: "Sudden Hospital Discharges",
      text: "Rapid mobilisation of home or community-based care to prevent delayed discharges or readmissions."
    },
    {
      img: Crisis2,
      title: "Breakdown in Care Arrangements",
      text: "Whether due to illness, absence, or breakdown of a placement, we ensure no one is left without support."
    },
    {
      img: Crisis3,
      title: "Safeguarding Concerns",
      text: "Urgent protective care when an individual’s safety is at risk, ensuring they are removed from harm’s way and stabilised."
    },
    {
      img: Crisis4,
      title: "Children’s Emergency Placements",
      text: "Immediate safe placements for children and young people, including those with complex behavioural, emotional, or clinical needs."
    },
  ];

  return (
    <section className="crisis-wrapper">
      <h2 className="crisis-title">Crisis service provides immediate solutions for:</h2>

      <div className="crisis-grid">
        {cards.map((card, index) => (
          <div className="crisis-card" key={index}>
            <img src={card.img} alt={card.title} className="crisis-image" />

            <div className="crisis-content">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
