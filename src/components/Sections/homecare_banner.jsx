import React from "react";
import HomecareBanner from "../../assets/img/homecare_banner2.jpg";
import "../WhatDrivesUs.css";

export default function homecare_banner() {
  return (
    <div className="wd-img top-img">
            <img src={HomecareBanner} alt="Care Team" />
          </div>
  );
}

