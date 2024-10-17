import { CiMenuFries } from "react-icons/ci";
import Logo from "@/assets/logo-full.png";
import Image from "next/image";

export const NavBar = () => {
  return (
    <header className="py-5  sticky top-0 backdrop-blur-sm z-20 w-full">
      <div className="container flex items-center justify-between">
        <Image src={Logo} alt="logo" width={150} height={60} />
        <CiMenuFries className="md:hidden" />
        <nav className="hidden md:flex gap-6 text-black/80 items-center">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          {/* <a href="#blog">Blogs</a> */}
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};
