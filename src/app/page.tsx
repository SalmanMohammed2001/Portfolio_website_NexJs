import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import EducationPage from "./components/education/Education";
import NavBar from "./components/Header/NavBar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/project/project";
import Skills from "./components/skills/skills";
import Stringht from "./components/stringht/stringht";


export default function Home() {
  return (
    <>
      <Hero/>
      <Stringht/>
      <About/>
      {/* <EducationPage/> */}
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  )
      
}