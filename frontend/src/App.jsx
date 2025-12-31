import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import HireMeVideo from "./components/HireMeVideo";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <HireMeVideo />
      <Chatbot />
    </div>
  );
}

export default App;
