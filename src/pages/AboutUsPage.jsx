import About from "../components/Sections/About";
import AboutBanner from "../components/Sections/AboutBanner";
import AboutSection from "../components/Sections/AboutSection";
import WhatDrivesUs from "../components/Sections/WhatDrivesUs";
import ValuesSection from "../components/Sections/ValuesSection";

export default function AboutUs() {
//   return < AboutBanner/>
  return (
    <>
        <AboutBanner />
        <AboutSection/>
        <WhatDrivesUs />
        <ValuesSection />

    </>
  );
}
