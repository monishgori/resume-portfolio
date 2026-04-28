import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import CurrentlyWorkingOn from "@/components/sections/CurrentlyWorkingOn";

export default function Home() {
  return (
    <div className="flex flex-col relative z-10 divide-y divide-white/5">
      <Hero />
      <Highlights />
      <Projects />
      <About />
      <CurrentlyWorkingOn />
      <Skills />
      <Contact />
    </div>
  );
}
