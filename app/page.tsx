'use client';

import Navbar from "./components/Navbar";
import BackgroundDecoration from "./components/BackgroundDecoration";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import LeetCodeSection from "./components/LeetCodeSection";
import EducationSection from "./components/EducationSection";
import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[var(--background)] selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:bg-indigo-500/30 dark:selection:text-indigo-300">
      <Navbar />
      <BackgroundDecoration />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <LeetCodeSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

