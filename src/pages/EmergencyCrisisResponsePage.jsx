import EmergencyCrisis from "../components/Sections/EmergencyCrisis";
import EmergencyCrisisResponse from "../components/Sections/EmergencyCrisisResponse";
import CrisisSolutions from "../components/Sections/CrisisSolutions";
import StepIn from "../components/Sections/StepIn";
import EmergencyCrisisBanner from "../components/Sections/EmergencyCrisisBanner";

export default function ContactUs() {
//   return < AboutBanner/>
  return (
    <>
        {/* <EmergencyCrisis /> */}
        <EmergencyCrisisBanner />
        <EmergencyCrisisResponse />
        <CrisisSolutions />
        <StepIn />
    </>
  );
}
