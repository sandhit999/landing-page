import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";

// Home page sections
import Hero         from "./components/Hero";
import Stats        from "./components/Stats";
import Services     from "./components/Services";
import Capabilities from "./components/Capabilities";
import WhyUs        from "./components/WhyUs";
import TierModel    from "./components/TierModel";
import Industries   from "./components/Industries";
import Vision2030   from "./components/Vision2030";
import GlobalPresence from "./components/GlobalPresence";
import Contact      from "./components/Contact";
import Footer       from "./components/Footer";

// Pages
import ITServices         from "./pages/Services/ITServices";
import ManpowerConsulting from "./pages/Services/ManpowerConsulting";
import IndustriesPage     from "./pages/Industries/IndustriesPage";
import CareersPage        from "./pages/Careers/CareersPage";
import AboutPage          from "./pages/About/AboutPage";
import ContactPage        from "./pages/Contact/ContactPage";

const HomePage = () => (
  <>
    <Hero />
    <Stats />
    <Services />
    <Capabilities />
    <WhyUs />
    <TierModel />
    <Industries />
    <Vision2030 />
    <GlobalPresence />
    <Contact />
    <Footer />
  </>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -14 }}
    transition={{ duration: 0.32, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"                  element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/services"          element={<PageTransition><ITServices /></PageTransition>} />
        <Route path="/services/it"       element={<PageTransition><ITServices /></PageTransition>} />
        <Route path="/services/manpower" element={<PageTransition><ManpowerConsulting /></PageTransition>} />
        <Route path="/industries"        element={<PageTransition><IndustriesPage /></PageTransition>} />
        <Route path="/careers"           element={<PageTransition><CareersPage /></PageTransition>} />
        <Route path="/about"             element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/contact"           element={<PageTransition><ContactPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 z-[100] origin-left"
    />
  );
};

function AppInner() {
  return (
    <div className="min-h-screen transition-colors duration-400" style={{ backgroundColor: "var(--bg-primary)" }}>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppInner />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
