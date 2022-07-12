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
import { navigation_link } from "@/data/link";

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
          className={` h-screen px-10  space-y-6 lg:space-y-[2vw] w-full sm:w-[80%] lg:w-[80%] flex flex-col lg:flex-row items-center justify-center`}
        >
          <div className="flex flex-col space-y-6 lg:space-y-[3vw] justify-start items-start">
            <Link href={"/"}>
              <Image src={isDark ? DarkLogo : Logo} />
            </Link>
            <div
              className={`w-full text-sm ${
                isDark ? "text-[#FDFDFD]" : "text-[#1F1D1D]"
              } lg:text-[1.3vw] lg:leading-[1.8vw] sm:w-[75%] `}
            >
              We are a new-age brand incubator that specializes in integrated
              digital solutions- website, app, marketing, UX/UI, and technology.
              We engineer, design, and help you scale your products to reach
              your target group. Since day one, we've helped innovators and
              founders take their startups to the next level by providing them
              with the tools and guidance they need to turn their excellent
              ideas into powerful companies.
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
                  {navigation_link.map((item, index) => (
                    <Link key={"naviga" + index} href={item.link}>
                      <span className="px-[1.8vw] sm:px-0">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-10 w-full items-center sm:items-start ">
            <Link href={"/start-a-project"}>
              <button
                className={`button transition-colors w-full sm:w-auto lg:w-[22vw] duration-200 ease-in-out hover:shadow-md hover:bg-[#F0C808] hover:text-black font-[PPNeueMontreal] p-3 sm:p-5 rounded-full  text-2xl lg:text-[2.2vw] px-8 ${
                  isDark
                    ? "text-[#1F1D1D] bg-[#FDFDFD]"
                    : "text-[#FDFDFD] bg-[#1F1D1D]"
                }`}
              >
                START A PROJECT
              </button>
            </Link>
            <div className="button flex space-x-3">
              <Link href={"https://www.linkedin.com/company/incubr/about/"}>
                <button
                  className={`w-14 ${
                    isDark
                      ? "text-[#1F1D1D] bg-[#FDFDFD]"
                      : "text-[#FDFDFD] bg-[#1F1D1D]"
                  } h-14 flex justify-center items-center hover:shadow-md hover:bg-[#F0C808] hover:text-black  rounded-full`}
                >
                  <Image src={isDark ? LinkedInLight : LinkedIn} />
                </button>
              </Link>
              <Link href={"https://www.instagram.com/incubr.tech/"}>
                <button
                  className={`w-14 ${
                    isDark
                      ? "text-[#1F1D1D] bg-[#FDFDFD]"
                      : "text-[#FDFDFD] bg-[#1F1D1D]"
                  } h-14 flex justify-center items-center hover:shadow-md hover:bg-[#F0C808] hover:text-black  rounded-full`}
                >
                  <Image src={isDark ? InstagramLight : Instagram} />
                </button>
              </Link>
              <Link
                href={"whatsapp://send?text=Hello World!&phone=+919999988493"}
              >
                <button
                  className={`w-14 ${
                    isDark
                      ? "text-[#1F1D1D] bg-[#FDFDFD]"
                      : "text-[#FDFDFD] bg-[#1F1D1D]"
                  } h-14 flex justify-center items-center hover:shadow-md hover:bg-[#F0C808] hover:text-black  rounded-full`}
                >
                  <Image src={isDark ? WhatsAppLight : WhatsApp} />
                </button>
              </Link>
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
