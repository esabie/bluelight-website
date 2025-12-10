import React from "react";
import EmergencyResponseImage from "../../assets/img/emergencyResponse.jpg";
import "../ServicesPage.css";


export default function EmergencyCrisis() {
  return (
    <section className="wd-img top-im">

      {/* FULL-WIDTH, FULL-HEIGHT IMAGE */}
      <img
        src={EmergencyResponseImage} // your real image path
        alt="Emergency response Banner"
        className="absolute top-0 left-0  object-cover scale-[1.15]"
      />

      {/* OPTIONAL DARK OVERLAY */}


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
          EMERGENCY CRISIS RESPONSE
        </h1>

        <p className="text-lg md:text-xl font-light mt-3">
          Emergency Response to your Care needs
        </p> */}
      </div>
    </section>
  );
}
