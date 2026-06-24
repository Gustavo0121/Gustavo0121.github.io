/**
 * Home — Portfólio de Gustavo Ribeiro
 * Design: Obsidian Engineering — dark, minimalista, moderno
 * Compõe todas as seções do portfólio com scroll reveal
 */
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsBar from "../components/StatsBar";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import StackSection from "../components/StackSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ResumeSection from "../components/ResumeSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{ background: "#0B0F19", color: "#F9FAFB" }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <hr className="divider-gradient" aria-hidden="true" />
        <ExperienceSection />
        <hr className="divider-gradient" aria-hidden="true" />
        <StackSection />
        <hr className="divider-gradient" aria-hidden="true" />
        <ProjectsSection />
        <hr className="divider-gradient" aria-hidden="true" />
        <SkillsSection />
        <hr className="divider-gradient" aria-hidden="true" />
        <ResumeSection />
        <hr className="divider-gradient" aria-hidden="true" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
