// src/App.jsx
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import Sidebar from "./components/Sidebar";
import WorkSection from "./components/pages/WorkSection";
import ContactSection from "./components/pages/ContactSection";
import BlogSection from "./components/pages/BlogSection";
import "./styles/globals.css";

function App() {
  return (
    <div className="w-screen h-screen bg-black text-white flex flex-col md:flex-row overflow-hidden">
      <Sidebar />
      <main className="flex-1 p-6 md:p-12 overflow-auto">
        <HeroSection />
        <SkillsSection />
        <WorkSection />
        <ContactSection />
        <BlogSection />
      </main>
    </div>
  );
}

export default App;