import { GoArrowUpRight } from "react-icons/go";

const footerLinks = [
  { title: "LinkedIn", link: "https://www.linkedin.com/in/pushkarthakur/" },
  {
    title: "Email",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=pushkar.thakur28@gmail.com",
  },
  { title: "Github", link: "https://github.com/Push9828" },
  { title: "Medium", link: "https://medium.com/@pushkar-thakur28" },
];

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white/70 to-[#D2DCFF]">
      <div className="container">
        <div className="border-t border-[#EAEAEA] py-6 text-sm flex flex-col md:flex-row items-center justify-center">
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                key={link.title}
                className="inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span className="font-semibold text-[#010D3E]">
                  {link.title}
                </span>
                <GoArrowUpRight className="size-4 text-[#010D3E]" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
