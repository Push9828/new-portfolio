import { NavBar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { About } from "@/sections/About";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Projects />
      <About />
    </div>
  );
}
