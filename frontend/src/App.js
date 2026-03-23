
// ========================================
// Updated App.js
// ========================================

import React, { useEffect } from 'react';
import Hero from './sections/Hero';
import ExperienceJourney from './sections/Experience';
import Footer from './sections/Footer';
import Header from './sections/Header';
import AnimatedPortfolio from "./pages/Testpage";
import ScrollWords from "./sections/Experience";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { DataProvider } from './contaxt/DataContect';
import ContactPage from './pages/contact';
import LatestProject from './sections/LatestProject';
import Services from './sections/Services';
import About from './sections/About';
import Technologies from './sections/Technologies';
import ShutterTransition from './components/ShutterTransition';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function ReapCapital() {

  return (
    <div
      id="smooth-wrapper"
      className="  bg-gradient-to-r from-[#1c1b1b] via-black to-black text-black min-h-screen relative overflow-hidden justify-center items-center"
    >
      {/* Header */}
      <Header />

      <div id="smooth-content">


        {/* Hero Section */}
        <Hero />

        <About />

        {/* Business Loans Section */}
        <Technologies />

        <LatestProject />
        <ExperienceJourney />

        {/* Shutter Transition: Services (top) reveals Footer (bottom) */}
        <ShutterTransition>
          <Services />
          <Footer />
        </ShutterTransition>
        {/* Shutter Transition Container */}

      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
      />
    </div>
  );
}

const App = () => {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ReapCapital />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/test" element={<AnimatedPortfolio />} />
        </Routes>
      </Router>
    </DataProvider>
  );
};

const RootApp = () => <App />;

export default RootApp;

// ========================================
// ALTERNATIVE: Without ScrollSmoother plugin
// (If you don't have access to ScrollSmoother)
// ========================================

// Add this CSS to your global styles (index.css or App.css)
/*
html {
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
}

* {
  scroll-behavior: smooth;
}
*/

// And use this simpler version without ScrollSmoother:

function ReapCapitalSimple() {
  return (
    <div className="bg-[#FFFFFFF5] text-black min-h-screen relative overflow-hidden">

      {/* Header */}
      <Header />
      {/* Hero Section */}
      <Hero />
      <About />

      {/* Business Loans Section */}
      <Technologies />

      <LatestProject />

      <ScrollWords />

      {/* Shutter Transition: Services (top) reveals Footer (bottom) */}
      <ShutterTransition>
        <Services />
        <Footer />
      </ShutterTransition>

      <LatestProject />

    </div>
  );
}