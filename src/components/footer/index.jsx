import Image from "next/image";
import React from "react";
import Logo from "@/assets/INCUBR (1).svg";
import DarkLogo from "@/assets/dark.svg";
import Link from "next/link";
import WhatsApp from "@/assets/whitewhatsapp.svg";
import Instagram from "@/assets/whiteinsta.svg";
import LinkedIn from "@/assets/whitelinkedin.svg";
import WhatsAppLight from "@/assets/whatsapp.svg";
import InstagramLight from "@/assets/instagram.svg";
import LinkedInLight from "@/assets/linkedin.svg";
import moment from "moment";
import ArrowDown from "@/assets/arrowDown.svg";

export default function Footer({ isDark = false }) {
  return (
    <div className="w-full flex flex-col items-center">
      <div
        className={`flex w-full  bottom-10 mt-10 lg:h-[28vw] items-center justify-center`}
      >
        <div className="flex w-[100%] justify-center">
          <div
            onClick={() => window.scrollTo(0, window.scrollY + 400)}
            className="w-48 h-48 flex flex-col cursor-pointer items-center justify-center"
          >
            <div className="button w-36 h-36 bg-transparent border-black hover:border-transparent transition-colors duration-300 ease-in-out hover:bg-[#F0C808] flex rounded-full border justify-center items-center">
              <Image src={ArrowDown} />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`w-full ${
          isDark ? "bg-[#1F1D1D]" : "bg-[#FDFDFD]"
        } flex justify-center`}
      >
        <footer
          className={` h-screen px-10  space-y-10 lg:space-y-[2vw] w-full sm:w-[80%] lg:w-[80%] flex flex-col lg:flex-row items-center justify-center`}
        >
          <div className="flex flex-col space-y-10 lg:space-y-[3vw] justify-start items-start">
            <Link href={"/"}>
              <Image src={isDark ? DarkLogo : Logo} />
            </Link>
            <div
              className={`w-full text-md ${
                isDark ? "text-[#FDFDFD]" : "text-[#1F1D1D]"
              } lg:text-[1.5vw] sm:w-2/3`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div
              className={`flex ${
                isDark ? "text-[#FDFDFD]" : "text-[#1F1D1D]"
              } w-full`}
            >
              <div className="flex flex-1 ">
                <div className="button flex space-y-2 lg:space-y-[1.5vw] flex-col text-xl cursor-pointer font-[PPNeueMontreal] tracking-wider lg:text-[1.7vw] opacity-50">
                  <span className="px-[1.8vw] sm:px-0 font-bold">Our Work</span>
                  <span className="px-[1.8vw] sm:px-0">Work 1</span>
                  <span className="px-[1.8vw] sm:px-0">Work 2</span>
                  <span className="px-[1.8vw] sm:px-0">Work 3</span>
                  <span className="px-[1.8vw] sm:px-0">Work 4</span>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-[2]">
                <div className="button flex space-y-2 lg:space-y-[1.5vw] flex-col text-xl cursor-pointer font-[PPNeueMontreal] tracking-wider lg:text-[1.7vw] opacity-50">
                  <span className="px-[1.8vw] sm:px-0">Home</span>
                  <span className="px-[1.8vw] sm:px-0">Services</span>
                  <span className="px-[1.8vw] sm:px-0">Work</span>
                  <span className="px-[1.8vw] sm:px-0">Testimonies</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-10 w-full items-center sm:items-start ">
            <Link href={"/start-a-project"}>
              <button
                className={`button transition-colors w-full sm:w-auto duration-200 ease-in-out hover:shadow-md hover:bg-[#F0C808] hover:text-black font-[PPNeueMontreal] p-3 sm:p-5 rounded-full  text-2xl lg:text-[2.5vw] px-8 ${
                  isDark
                    ? "text-[#1F1D1D] bg-[#FDFDFD]"
                    : "text-[#FDFDFD] bg-[#1F1D1D]"
                }`}
              >
                START A PROJECT
              </button>
            </Link>
            <div className="button flex space-x-3">
              <button
                className={`w-14 ${
                  isDark
                    ? "text-[#1F1D1D] bg-[#FDFDFD]"
                    : "text-[#FDFDFD] bg-[#1F1D1D]"
                } h-14 flex justify-center items-center hover:shadow-md hover:bg-[#F0C808] hover:text-black  rounded-full`}
              >
                <Image src={isDark ? LinkedInLight : LinkedIn} />
              </button>
              <button
                className={`w-14 ${
                  isDark
                    ? "text-[#1F1D1D] bg-[#FDFDFD]"
                    : "text-[#FDFDFD] bg-[#1F1D1D]"
                } h-14 flex justify-center items-center hover:shadow-md hover:bg-[#F0C808] hover:text-black  rounded-full`}
              >
                <Image src={isDark ? InstagramLight : Instagram} />
              </button>
              <button
                className={`w-14 ${
                  isDark
                    ? "text-[#1F1D1D] bg-[#FDFDFD]"
                    : "text-[#FDFDFD] bg-[#1F1D1D]"
                } h-14 flex justify-center items-center hover:shadow-md hover:bg-[#F0C808] hover:text-black  rounded-full`}
              >
                <Image src={isDark ? WhatsAppLight : WhatsApp} />
              </button>
            </div>

            <div
              className={`${
                isDark ? "text-[#FDFDFD]" : "text-[#1F1D1D]"
              } tracking-wider font-[PPNeueMontreal] opacity-50 text-2xl lg:text-[1.5vw]`}
            >
              <span>&copy; COPYRIGHT {moment().year()}</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
