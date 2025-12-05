import React from "react";
import AboutSectionImage from "../../assets/img/about-section.jpg";

export default function AboutSection() {
  return (
    <div
      style={{
        padding: "60px 40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "90%",
          maxWidth: "1300px",
          backgroundColor: "#F3F1FF", // light lavender
          borderRadius: "25px",
          padding: "40px",
          gap: "40px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT SIDE — IMAGE */}
        <div style={{ flex: 1 }}>
          <img
            src={AboutSectionImage} // change to your actual image
            alt="About Us"
            style={{
              width: "100%",
              borderRadius: "20px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* RIGHT SIDE — TEXT */}
        <div style={{ flex: 1 }}>
          <h3
            style={{
              color: "#1c1c57",
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "10px",
            }}
          >
            ABOUT US
          </h3>

          <h1
            style={{
              color: "#1c1c57",
              fontSize: "32px",
              fontWeight: "700",
              marginBottom: "25px",
              lineHeight: "1.3",
            }}
          >
            Our Story - Passionate About People. Committed to Care.
          </h1>

          <p
            style={{
              color: "#333",
              fontSize: "17px",
              lineHeight: "1.7",
              marginBottom: "20px",
            }}
          >
            We believe that great care starts with great people. That is why we
            invest heavily in sourcing, training, and supporting the best local
            talent, from registered nurses and support workers to crisis response
            teams and homecare specialists. Our staff are not just highly
            skilled, they are deeply committed to making a difference in every
            shift, every home, and every individual they support.
          </p>

          <p
            style={{
              color: "#333",
              fontSize: "17px",
              lineHeight: "1.7",
              marginBottom: "20px",
            }}
          >
            Whether we are responding to an urgent call for overnight support,
            mobilising a team for a vulnerable child in crisis, or helping a
            family care for a loved one at home, we show up with purpose,
            professionalism, and compassion.
          </p>

          <p
            style={{
              color: "#333",
              fontSize: "17px",
              lineHeight: "1.7",
              marginBottom: "25px",
            }}
          >
            We do not see ourselves as just a provider. We see ourselves as
            partners in care. Our strength lies in our people, and our commitment
            is to always act in service of those who trust us with their most
            important needs. Bluelight is proud to work alongside NHS trusts,
            local authorities, care homes, and private individuals to deliver
            safe, dignified, and high-quality care, wherever and whenever it is
            needed most.
          </p>

          <p
            style={{
              fontStyle: "italic",
              fontSize: "16px",
              color: "#1c1c57",
            }}
          >
            “The best way to find yourself is to lose yourself in the service of
            others.” – Mahatma Gandhi
          </p>
        </div>
      </div>
    </div>
  );
}
