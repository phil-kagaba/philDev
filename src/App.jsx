import ZoomStage from "./components/ZoomStage";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Capabilities from "./components/Capabilities";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <ZoomStage>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Capabilities />
        <About />
        <Contact />
      </main>
    </ZoomStage>
  );
}
