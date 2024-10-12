import { CiMenuFries } from "react-icons/ci";

export const NavBar = () => {
  return (
    <header className="flex items-center justify-between py-5 container sticky top-0 backdrop-blur-sm z-20">
      <div>Logo</div>
      <CiMenuFries className="md:hidden" />
      <nav className="hidden md:flex gap-6 text-black/60 items-center">
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};
