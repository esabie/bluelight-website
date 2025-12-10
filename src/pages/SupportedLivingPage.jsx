import SupportedLiving from "../components/Sections/SupportedLiving";
import SupportedLivingServices from "../components/Sections/SupportedLivingServices";
import NeedsSupport from "../components/Sections/NeedsSupport";
import Ethos from "../components/Sections/Ethos";

export default function SupportedLivingPage() {
  return (
    <>
        <SupportedLiving />
        <SupportedLivingServices />
        <NeedsSupport />
        <Ethos /> 
    </>
  );
}