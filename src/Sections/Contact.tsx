"use client";

import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import starImage from "@/assets/images/star.png";
import springImage from "@/assets/images/spring.png";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white/70 overflow-x-clip">
      <div className="container ">
        <div className="relative">
          <div className="border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#a1afda] bg-white py-8 px-10 text-center md:text-left ">
            <div className="flex flex-col md:flex-row gap-8 md:gap-60 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#010D3E]">
                  Let's create something amazing together
                </h2>
                <p className="text-sm md:text-base mt-2 text-black/70">
                  Ready to bring your next project to life? Let's connect and
                  discuss how can I help you achive your goal
                </p>
              </div>
              <div>
                <button className="btn btn-primary inline-flex gap-2 mt-6 w-max">
                  <span
                    className="font-semibold"
                    onClick={() => {
                      window.open(
                        "https://mail.google.com/mail/?view=cm&fs=1&to=pushkar.thakur28@gmail.com",
                        "_blank"
                      );
                    }}
                  >
                    Contact Me
                  </span>
                  <GoArrowUpRight />
                </button>
              </div>
            </div>
            <Image
              src={starImage}
              alt="star"
              width={360}
              className="absolute -left-[350px] -top-[137px]"
            />
            <Image
              src={springImage}
              alt="spring"
              width={360}
              className="absolute -right-[331px] -top-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
