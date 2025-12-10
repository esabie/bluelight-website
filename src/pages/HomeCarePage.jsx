import ServicesHomeCare from "../components/Sections/ServicesHomecare";
import HomecareServicesFeatures from "../components/Sections/HomecareServicesFeatures";
import WhatSetsUsApart from "../components/Sections/WhatSetsUsApart";
// import ServicesHomeCareBanner from "../components/Sections/ServicesHomeCareBanner";

export default function ContactUs() {
//   return < AboutBanner/>
  return (
    <>
        {/* <ServicesHomeCareBanner /> */}
        <ServicesHomeCare />
        <HomecareServicesFeatures />
        <WhatSetsUsApart />
        
    </>
  );
}
