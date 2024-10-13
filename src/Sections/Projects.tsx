import Image from "next/image";
import { projectData } from "@/data";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

export const Projects = () => {
  return (
    <section className="py-24 bg-white/70">
      <div className="container">
        <h2 className="section-title">My Work</h2>
        <p className="section-description mt-5">
          A showcase of web applications and solutions, leveraging modern web
          technologies
        </p>
        <div className="flex flex-col gap-10 mt-10">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="px-8 pt-8 lg:pt-16 lg:px-20 rounded-3xl shadow-[0_7px_14px_#a1afda] bg-white relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-[#F1F1F1]"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 ">
                <div className="lg:pb-16">
                  <h3 className="text-[#010D3E] text-xl md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="text-black/70 text-sm md:text-base mt-2 leading-6 tracking-normal">
                    {project.description}
                  </p>
                  <hr className="border-t-2 border-[#EAEAEA] my-3" />
                  <ul className="flex flex-col gap-4 mt-4">
                    {project.techStack.map((tech) => (
                      <li
                        key={tech}
                        className="flex gap-2 items-center text-black/60"
                      >
                        <RiCheckboxCircleLine className="text-black/60" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4 items-center mt-5 ">
                    <a href={project.demoLink}>
                      <button className="btn btn-primary text-sm flex gap-2">
                        Live demo
                        <span>
                          <GoArrowUpRight />
                        </span>
                      </button>
                    </a>
                    <a href={project.repoLink}>
                      <button className="btn btn-secondary text-sm flex gap-2">
                        GitHub
                        <span>
                          <FaGithub />
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.img}
                    alt="project image"
                    className="mt-8 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
