import Snowfall from "react-snowfall";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Technologies from "./components/Technologies";
import AboutMe from "./pages/AboutMe";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import CursorAnimation from "./components/CursorAnimation";

function App() {
  return (
    <div className="w-full flex justify-center relative scroll-smooth">
      <CursorAnimation />
      <Snowfall
        color="#fff"
        snowflakeCount={500}
        enable3DRotation
        speed={[0.5, 0.8]}
      />

      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col gap-16">
        <Header />
        <Home />
        <AboutMe />
        <Skills />
        <Technologies />
        <Career />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
