import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopNavbar from "./components/Nav/TopNavbar";
import Footer from "./components/Sections/Footer";

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import AboutUsPage from "./pages/AboutUsPage";
import ProjectsPage from "./pages/ProjectsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactUsPage from "./pages/ContactUsPage";
import SpecialistPage from "./pages/SpecialistPage";
import HomeCarePage from "./pages/HomeCarePage";
import EmergencyCrisisResponsePage from "./pages/EmergencyCrisisResponsePage";
import SupportedLivingPage from "./pages/SupportedLivingPage";
import RehabPage from "./pages/RehabPage";
import AntiSlaveryPage from "./pages/AntiSlaveryPage";
import LiveJobsPage from "./pages/LiveJobsPage";
import CreativityPage from "./pages/CreativityPage";
import RecruitmentPage from "./pages/RecruitmentPage";
import JoinUsPage from "./pages/JoinUsPage";
import ReferPage from "./pages/ReferPage";
import LiveJobs1Page from "./pages/LiveJobsDetails1Page";


function App() {
  return (
    <Router>
      <TopNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="services/specialist-recruitment" element={<SpecialistPage />} />
        <Route path="services/homecare-services" element={<HomeCarePage />} />
        <Route path="services/emergency-crisis-response" element={<EmergencyCrisisResponsePage />} />
        <Route path="services/supported-living-services" element={<SupportedLivingPage />} />
        <Route path="services/rehabilitation-services" element={<RehabPage />} />
        <Route path="/anti-slavery-policy" element={<AntiSlaveryPage />} />
        <Route path="live-jobs" element={<LiveJobsPage />} />
        <Route path="/awesome-project" element={<ProjectsPage />} />
        <Route path="/creativity" element={<CreativityPage />} />
        <Route path="/recruitment" element={<RecruitmentPage />} />
        <Route path="/register" element={<JoinUsPage />} />
        <Route path="/refer-a-friend" element={<ReferPage />} />
        <Route path="/job=1" element={<LiveJobs1Page />} />
        
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
