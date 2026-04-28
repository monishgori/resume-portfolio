import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import CurrentlyWorkingOn from "@/components/sections/CurrentlyWorkingOn";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 md:gap-16 relative z-10">
      <Hero />
      <Projects />
      <About />
      <CurrentlyWorkingOn />
      <Skills />
      <Contact />
    </div>
  );
}
