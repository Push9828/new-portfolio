import { NavBar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Projects />
    </div>
  );
}
