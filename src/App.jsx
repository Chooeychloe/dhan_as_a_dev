import "./App.css";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Navbar from "./sections/NavBar/NavBar";
import Projects from "./sections/Projects/Projects";
import Services from "./sections/Services/Services";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <>
    <Navbar></Navbar>
      <Hero />
      <Projects />
      <Skills></Skills>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
