import SupportedLivingServices from "../components/Sections/SupportedLivingServices";
import NeedsSupport from "../components/Sections/NeedsSupport";
import Ethos from "../components/Sections/Ethos";
import SupportedLivingBanner from "../components/Sections/SupportedLivingBanner";
import SupportedLivingService from "../components/Sections/SupportedLivingService";
import WhatWeProvide from "../components/Sections/WhatWeProvide";

export default function SupportedLivingPage() {
  return (
    <>
        <SupportedLivingBanner />
        <SupportedLivingService />
        <NeedsSupport />
        <WhatWeProvide />
        <Ethos /> 
    </>
  );
}