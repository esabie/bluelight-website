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
        
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
