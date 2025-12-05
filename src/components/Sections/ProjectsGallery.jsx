import React from "react";
import "../ProjectsGallery.css";

import Img1 from "../../assets/img/proj1.jpg";
import Img2 from "../../assets/img/proj2.jpg";
import Img3 from "../../assets/img/proj3.jpg";
import Img4 from "../../assets/img/proj4.jpg";
import Img5 from "../../assets/img/proj5.jpg";
import Img6 from "../../assets/img/proj6.jpg";

export default function ProjectsGallery() {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6];

  return (
    <section className="pg-wrapper">
      <div className="pg-grid">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Project ${index + 1}`} className="pg-img" />
        ))}
      </div>
    </section>
  );
}
