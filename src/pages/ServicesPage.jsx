import Services from "../components/Sections/Services";
import ServicesBanner from "../components/Sections/ServicesBanner";
import ServicesHomeCare from "../components/Sections/ServicesHomecare";
import ServicesHomeCareBanner from "../components/Sections/ServicesHomeCareBanner";
import ServicesSection from "../components/Sections/ServicesSection";
import HomecareServicesFeatures from "../components/Sections/HomecareServicesFeatures";
import WhatSetsUsApart from "../components/Sections/WhatSetsUsApart";
import EmergencyCrisis from "../components/Sections/EmergencyCrisis";
import EmergencyCrisisResponse from "../components/Sections/EmergencyCrisisResponse";
import CrisisSolutions from "../components/Sections/CrisisSolutions";
import StepIn from "../components/Sections/StepIn";
import SupportedLiving from "../components/Sections/SupportedLiving";
import SupportedLivingServices from "../components/Sections/SupportedLivingServices";
import NeedsSupport from "../components/Sections/NeedsSupport";
import Ethos from "../components/Sections/Ethos";
import AwesomeProjects from "../components/Sections/AwesomeProjects";
import AwesomeProjectsSection from "../components/Sections/AwesomeProjectsSection";
import ProjectsGallery from "../components/Sections/ProjectsGallery";
import Creativity from "../components/Sections/Creativity";
import Creativity2 from "../components/Sections/Creativity2";


export default function ServicesPage() {
  return (
      <>
          <ServicesBanner />
          {/* <ServicesSection /> */}
          <ServicesHomeCareBanner />
          {/* <ServicesHomeCare /> */}
          {/* <HomecareServicesFeatures /> */}
          {/* <WhatSetsUsApart /> */}
          <EmergencyCrisis />
          {/* <EmergencyCrisisResponse />
          <CrisisSolutions />
          <StepIn /> */}
          {/* <SupportedLiving />
          <SupportedLivingServices />
          <NeedsSupport />
          <Ethos />   */}
          <AwesomeProjects />
          <AwesomeProjectsSection />
          <ProjectsGallery />
          <Creativity />
          <Creativity2 />
      </>
  );

}
