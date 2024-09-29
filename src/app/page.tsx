import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/Hero/Hero";
import Projects from "./components/project/project";
import Skill from "./components/skills/skill";
import Stringht from "./components/stringht/stringht";


export default function Home() {
  return (
    <>
      <Hero/>
      <Stringht/>
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
    </>
  )
      
}