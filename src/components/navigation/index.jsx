import React from "react";
import {
  animateNavigation,
  reverseNavigation,
} from "@/src/animation/navigation";
import WhatsApp from "@/assets/whatsapp.svg";
import Instagram from "@/assets/instagram.svg";
import LinkedIn from "@/assets/linkedin.svg";
import Image from "next/image";
import Cross from "@/assets/cross.svg";
import { navigation_link } from "@/data/link";
import Link from "next/link";
import Humbargar from "@/assets/hum.svg";
import SmallCross from "@/assets/smallcross.svg";

export default function Navigation({ isDark = false }) {
  const [height, setHeight] = React.useState(0);
  const [opened, setOpened] = React.useState(false);
  const [isRight, setIsRight] = React.useState(false);
  const [currentLocation, setCurrentLocation] = React.useState("/");

  React.useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    setCurrentLocation(window.location.pathname);

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="navigation flex w-auto sm:w-16 font-[Arial] z-[40] absolute right-0 sm:left-0 sm:items-center"
      style={{ height }}
    >
      <div
        className={`innerBox w-auto transform rotate-180 sm:rotate-0 ${
          isDark ? "sm:bg-white" : "sm:bg-[#1F1D1D]"
        } h-[31vw] px-[8vw] sm:px-0 sm:h-[22vw] absolute sm:top-0 right-0 sm:relative flex justify-center rounded-tr-xl rounded-br-xl items-center`}
      >
        <button
          onClick={() => {
            if (opened) {
              reverseNavigation(false, isDark);
            } else {
              animateNavigation(false, isDark);
            }
            setOpened(!opened);
          }}
          className="w-12 hidden sm:block sm:w-16 tracking-wider trasform rotate-180 text-xl lg:text-[2vw] text-white"
        >
          {opened ? (
            <span
              style={{ writingMode: "vertical-rl" }}
              className="text-gray-500 hover:text-white"
            >
              CLOSE
            </span>
          ) : (
            <span
              style={{ writingMode: "vertical-rl" }}
              className={`${isDark ? "text-black" : "text-white"} `}
            >
              MENU
            </span>
          )}
        </button>
        <button
          onClick={() => {
            if (opened) {
              reverseNavigation(true, isDark);
            } else {
              setIsRight(true);
              animateNavigation(true, isDark);
            }
            setOpened(!opened);
          }}
          className={`w-12 ${
            opened ? "hidden" : "block"
          } sm:hidden lg:w-16 tracking-wider trasform rotate-180 text-xl lg:text-[2vw] text-white`}
        >
          <span
            style={{ writingMode: "vertical-rl" }}
            className={`${isDark ? "text-black" : "text-white"}  `}
          >
            <svg
              viewBox="0 0 54 53"
              fill="none"
              className=" w-[2.5vw] h-[2.5vw]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="26.7246"
                cy="26.5"
                r="26.5"
                fill={isDark ? "#fff" : "#1F1D1D"}
              />
            </svg>
          </span>
        </button>
        <button
          onClick={() => {
            setOpened(false);
            reverseNavigation(isRight, isDark);
          }}
          className="cross_button hidden opacity-0 absolute top-8 right-8 lg:top-16 lg:right-16"
        >
          <span
            style={{ writingMode: "vertical-rl" }}
            className={`${isDark ? "text-black" : "text-white"} flex sm:hidden`}
          >
            <Image src={SmallCross} />
          </span>
          <span
            style={{ writingMode: "vertical-rl" }}
            className={`${
              isDark ? "text-black" : "text-white"
            } hidden sm:flex  `}
          >
            <Image src={Cross} />
          </span>
        </button>
        <div
          id="navigation__list"
          className="hidden button flex-col lg:flex-row flex-1 px-10 sm:px-20 lg:px-0 lg:ml-20"
        >
          <ul className="flex flex-col flex-[2] cursor-pointer space-y-5">
            {navigation_link.map((item, index) => (
              <Link key={item.id} href={item.link}>
                <li
                  onClick={() => {
                    setOpened(false);
                    reverseNavigation(isRight, isDark);
                  }}
                  id={currentLocation === item.link ? "active" : ""}
                  className={`flex text-white hover:opacity-100 opacity-0 -translate-y-40 transition-colors ease-in-out duration-200 text-start  `}
                >
                  <span className="mt-6 opacity-50">0{index + 1}.</span>{" "}
                  <span className="ml-5 text-5xl lg:text-[7vw]">
                    {item.name}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
          <div
            id="button_section"
            className=" hidden flex-1 flex-col justify-end mt-10 lg:mt-0 space-y-5 lg:space-y-[1.8vw]"
          >
            <h1 className="text-gray-500 text-2xl lg:text-[1.5vw]">
              Let's work together
            </h1>
            <Link href={"/start-a-project"}>
              <button className="button rounded-full w-full sm:w-[50vw] lg:w-[20vw] tracking-wider hover:bg-[#F0C808] hover:shadow-md text-[#1F1D1D] bg-white py-3 px-4 flex items-center justify-center text-xl lg:text-[1.8vw]">
                START A PROJECT
              </button>
            </Link>
            <h1 className="text-gray-500 text-2xl lg:text-[1.5vw]">
              Follow us on{" "}
            </h1>
            <div className="flex space-x-3">
              <Link href={"https://www.linkedin.com/company/incubr/about/"}>
                <button className="button w-14 h-14 flex justify-center hover:bg-[#F0C808] hover:shadow-md items-center bg-white rounded-full">
                  <Image src={LinkedIn} />
                </button>
              </Link>
              <Link href={"https://www.instagram.com/incubr.tech/"}>
                <button className="button w-14 h-14 flex justify-center hover:bg-[#F0C808] hover:shadow-md items-center bg-white rounded-full">
                  <Image src={Instagram} />
                </button>
              </Link>
              <Link
                href={"whatsapp://send?text=Hello World!&phone=+919999988493"}
              >
                <button className="button w-14 h-14 flex justify-center hover:bg-[#F0C808] hover:shadow-md items-center bg-white rounded-full">
                  <Image src={WhatsApp} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
