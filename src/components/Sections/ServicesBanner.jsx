import React from "react";
import ServiceBannerImage from "../../assets/img/services-hero.jpg";
import "../ValuesSection.css";


export default function ServicesBanner() {
  return (
    <section className="wd-img top-im">

      {/* FULL-WIDTH, FULL-HEIGHT IMAGE */}
      <img
        src={ServiceBannerImage} // your real image path
        alt="Service Banner"
        className="absolute top-0 left-0 w-screen h-screen object-cover scale-[1.15]"
        // className="absolute inset-0 min-w-full min-h-full object-cover scale-110"
      />

      {/* OPTIONAL DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* TEXT CONTENT */}
      <div className="
        absolute inset-0
        flex flex-col justify-center
        pl-10 md:pl-20
        text-white
        max-w-xl
        z-10
      ">
        {/* <h3 className="text-lg md:text-xl font-semibold">OUR SERVICES</h3>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-2">
          SPECIALIST RECRUITMENT
        </h1>

        <p className="text-lg md:text-xl font-light mt-3">
          A specialist for your Staffing needs
        </p> */}
      </div>
    </section>
  );
}
