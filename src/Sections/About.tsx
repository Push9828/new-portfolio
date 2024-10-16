"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { PiStarFourFill } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNodedotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TechIcon } from "@/components/TechIcon";

const toolBoxItems = [
  {
    name: "React",
    type: FaReact,
  },
  {
    name: "Next.js",
    type: RiNextjsLine,
  },
  {
    name: "Tailwind",
    type: RiTailwindCssFill,
  },
  {
    name: "TypeScript",
    type: BiLogoTypescript,
  },
  {
    name: "JavaScript",
    type: IoLogoJavascript,
  },

  {
    name: "Node.js",
    type: SiNodedotjs,
  },
];

const hobbies = [
  { title: "F1 Racing", emoji: "🏁", left: "1%", top: "5%" },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "60%",
    top: "10%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "35%",
  },
  { title: "Reading", emoji: "📚", left: "45%", top: "60%" },
  { title: "Fitness", emoji: "🏋️‍♀️", left: "10%", top: "85%" },
];

export const About = () => {
  const constranintRef = useRef(null);
  return (
    <section id="about" className="py-16 bg-white/70">
      <div className="container">
        <h2 className="section-title">More Than Just Code</h2>
        <p className="section-description mt-5">
          Here's a look at the person behind the screen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="p-10 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#a1afda] bg-white">
            <div className="inline-flex items-center gap-2">
              <PiStarFourFill className="size-9 text-[#001E80]/40" />
              <h3 className="text-2xl font-bold text-[#010D3E]">My ToolBox</h3>
            </div>
            <p className="text-black/70">
              Technologies and tools I use to craft digital experiences.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
              {toolBoxItems.map((item) => (
                <div
                  key={item.name}
                  className="inline-flex items-center gap-4 py-2 px-3 border border-black/20 rounded-xl"
                >
                  <TechIcon Icon={item.type} className="md:hidden lg:block" />
                  <span className="text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-10 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#a1afda] bg-white flex flex-col">
            <div className="inline-flex items-center gap-2">
              <PiStarFourFill className="size-9 text-[#001E80]/40" />
              <h3 className="text-2xl font-bold text-[#010D3E]">
                Beyond the Code
              </h3>
            </div>
            <p className="text-black/70">
              My interests and hobbies beyond the digital realm
            </p>
            <p className="text-sm text-black/50">
              PS: Try dragging the capsules 😉
            </p>
            <div
              ref={constranintRef}
              className="mt-5 relative flex-1 min-h-[150px]"
            >
              {hobbies.map((hobby) => (
                <motion.div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 shadow-[0_2px_5px_#00000026] rounded-full py-1.5 absolute "
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                  drag
                  dragConstraints={constranintRef}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
