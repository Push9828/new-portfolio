"use client";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className="relative z-30">
      <button onClick={toggleMenu} className="cursor-pointer text-[#010D3E]">
        <CiMenuFries className="w-8 h-8" />
      </button>

      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#183EC2,_#EAEEFE_50%)] fixed top-0 right-0"
      />

      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className={`fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden ${
          isOpen ? "right-0" : "-right-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="cursor-pointer absolute top-10 right-16"
        >
          <IoCloseOutline className="w-8 h-8" />
        </button>
        <nav className="md:hidden flex flex-col gap-6 text-black/80 items-center text-3xl">
          {["Home", "Projects", "About", "Contact"].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              onClick={toggleMenu}
            >
              {section}
            </a>
          ))}
        </nav>
      </motion.ul>
    </nav>
  );
};
