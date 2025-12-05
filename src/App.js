import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopNavbar from "./components/Nav/TopNavbar";
import Footer from "./components/Sections/Footer";

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import AboutUsPage from "./pages/AboutUsPage";
import ProjectsPage from "./pages/ProjectsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactUsPage from "./pages/ContactUsPage";

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
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
