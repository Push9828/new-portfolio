import Image from "next/image";
import { GoArrowDown } from "react-icons/go";
import { GiCargoCrane } from "react-icons/gi";
import cogImage from "@/assets/images/cog.png";
import cylinder from "@/assets/images/cylinder.png";
import noodleImage from "@/assets/images/noodle.png";

export const Hero = () => {
  return (
    <section
      id="home"
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#183EC2,_#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Turning Concepts to Code
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Designing intuitive interfaces and solving challenges with morden
              web technologies. Driven to build impactful solutions that
              accelerate growth.
            </p>
            <div className="flex gap-4 items-center mt-[30px]">
              <button className="btn btn-primary inline-flex gap-2 text-sm md:text-base">
                Explore my work
                <span>
                  <GoArrowDown />
                </span>
              </button>
              <button className="btn btn-secondary inline-flex gap-2 text-sm md:text-base">
                Build together{" "}
                <span>
                  <GiCargoCrane />
                </span>
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={cogImage}
              alt="cog"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <Image
              src={cylinder}
              alt="cylinder"
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
            />
            <Image
              src={noodleImage}
              alt="noodle"
              width={220}
              height={220}
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
