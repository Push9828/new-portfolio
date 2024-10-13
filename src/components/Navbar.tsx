import { CiMenuFries } from "react-icons/ci";

export const NavBar = () => {
  return (
    <header className=" py-5  sticky top-0 backdrop-blur-sm z-20 w-full">
      <div className="container flex items-center justify-between">
        <div>Logo</div>
        <CiMenuFries className="md:hidden" />
        <nav className="hidden md:flex gap-6 text-black/60 items-center">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
};
