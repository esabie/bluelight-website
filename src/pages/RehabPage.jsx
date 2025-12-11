import About from "../components/Sections/About";
import AntiSlaveryPolicy from "../components/Sections/AntiSlaveryPolicy";
import Clinical from "../components/Sections/Clinical";
import Contact from "../components/Sections/Contact";
import GallerySection from "../components/Sections/GallerySection";
import Our from "../components/Sections/OurApproach";
import Outcomes from "../components/Sections/Outcomes";
import RehabBrochure from "../components/Sections/RehabBrochure";
import RehabilitationAbout from "../components/Sections/RehabilitationAbout";
import RehabilitationSettingSection from "../components/Sections/RehabilitationSettingSection";
import Who from "../components/Sections/Who";

export default function RehabPage() {
  return (
    <>
        <RehabBrochure />
        <RehabilitationAbout />
        <RehabilitationSettingSection />
        <GallerySection />
        <Who />
        <Our />
        <Outcomes />
        <Clinical />

    </>
  );
}
