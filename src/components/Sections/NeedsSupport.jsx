import React from "react";
import "../NeedsSupport.css";

// IMPORT IMAGES
import Need1 from "../../assets/img/needs1.jpg";
import Need2 from "../../assets/img/needs2.jpg";
import Need3 from "../../assets/img/needs3.jpg";
import Need4 from "../../assets/img/needs4.jpg";
import Need5 from "../../assets/img/needs5.jpg";

export default function NeedsSupport() {
  const items = [
    { img: Need1, label: "Complex health needs" },
    { img: Need2, label: "Learning disabilities" },
    { img: Need3, label: "Autism spectrum conditions" },
    { img: Need4, label: "Mental health conditions" },
    { img: Need5, label: "Physical disabilities" },
  ];

  return (
    <section className="needs-wrapper">
      <h2 className="needs-title">
        We work with adults and young people with a wide range of needs
      </h2>

      <div className="needs-grid">
        {items.map((item, index) => (
          <div className="needs-card" key={index}>
            <img src={item.img} alt={item.label} className="needs-img" />
            <p className="needs-label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
