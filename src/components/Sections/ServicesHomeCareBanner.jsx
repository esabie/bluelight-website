import React from "react";
import ServiceHomeImage from "../../assets/img/services_homecaree.jpg";
import "../ServicesPage.css";


export default function ServicesHomeCareBanner() {
  return (
    <section className="wd-img top-im">

      {/* FULL-WIDTH, FULL-HEIGHT IMAGE */}




      {/* TEXT CONTENT */}
      <div className="
        absolute inset-0
        flex flex-col justify-center
        pl-10 md:pl-20
        text-white
        max-w-xl
        z-10
      ">
        {/* <h3 className="text-lg md:text-xl font-semibold">OUR SERVICES</h3> */}

        <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-2">
          OUR SERVICES
        </h1>

        <p className="text-lg md:text-xl font-light mt-3">
          A specialist for your Staffing needs
        </p>
      </div>
    </section>
  );
}
