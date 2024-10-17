import { MobileNav } from "./MobileNav";
import Logo from "@/assets/logo-full.png";
import Image from "next/image";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  // { href: "#blog", label: "Blogs" },
  { href: "#contact", label: "Contact" },
];

export const NavBar = () => {
  return (
    <>
      <header className="hidden md:block py-5 sticky top-0 backdrop-blur-sm z-20 w-full">
        <div className="container flex items-center justify-between">
          <Image src={Logo} alt="logo" width={150} height={60} />
          <nav className="hidden md:flex gap-6 text-black/80 items-center">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <div className="md:hidden  flex items-center justify-between px-20 pt-5">
        <Image src={Logo} alt="logo" width={150} height={60} />
        <MobileNav />
      </div>
    </>
  );
};
