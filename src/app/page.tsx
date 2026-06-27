import Navigation from "@/components/Navigation";
import Hero      from "@/components/Hero";
import About     from "@/components/About";
import Skills    from "@/components/Skills";
import Projects  from "@/components/Projects";
import Contact   from "@/components/Contact";

import { navLinks, skills, projects, contactInfo } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Navigation links={navLinks} />
      <main>
        <Hero />
        <About />
        <Skills   skills={skills} />
        <Projects projects={projects} />
        <Contact  info={contactInfo} />
      </main>
      <footer className="py-8 px-6 border-t border-zinc-100 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Soma Inagaki
      </footer>
    </>
  );
}
