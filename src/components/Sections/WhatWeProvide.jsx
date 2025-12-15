import React from "react";
import "../WhatWeProvide.css";

// Replace with your real images
import img1 from "../../assets/img/provide1.jpg";
import img2 from "../../assets/img/provide2.jpg";
import img3 from "../../assets/img/provide3.jpg";
import img4 from "../../assets/img/provide4.jpg";
import img5 from "../../assets/img/provide5.jpg";

export default function WhatWeProvide() {
  const items = [
    {
      img: img1,
      title: "Flexible Support Models",
      text:
        "We offer a range of tailored support options, from 24/7 on-site staffing and waking night cover to planned daily visits. This ensures each individual gets the level of support they need while maintaining their independence.",
    },
    {
      img: img2,
      title: "Life Skills Development",
      text:
        "We help people develop essential daily living skills such as cooking, budgeting, shopping, self-care, and travel training. Our aim is to build confidence and resilience.",
    },
    {
      img: img3,
      title: "Tenancy & Housing Support",
      text:
        "Our teams assist with maintaining tenancies, liaising with landlords, and managing household responsibilities to prevent tenancy breakdowns.",
    },
    {
      img: img4,
      title: "Social Inclusion",
      text:
        "We actively promote community involvement, helping individuals build friendships, join local activities, and access education or employment opportunities.",
    },
    {
      img: img5,
      title: "Health & Wellbeing Support",
      text:
        "We help coordinate healthcare needs, from GP and therapy appointments to supporting physical activity programmes for holistic wellbeing.",
    },
  ];

  return (
    <section className="what-provide-section">
      <div className="provide-container">
        <h2 className="provide-title">What We Provide</h2>

        <div className="provide-grid">
          {items.map((item, index) => (
            <div className="provide-card" key={index}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}