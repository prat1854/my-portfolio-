'use client';

// Import components
import BackgroundDecoration from "./components/BackgroundDecoration";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] dark:bg-[var(--dark-bg)] relative">
      {/* Background decoration with proper accessibility */}
      <BackgroundDecoration />
      
      {/* Main content sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
