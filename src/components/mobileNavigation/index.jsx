import React from "react";
import WhatsApp from "@/assets/whatsapp.svg";
import Instagram from "@/assets/instagram.svg";
import LinkedIn from "@/assets/linkedin.svg";
import Image from "next/image";
import { navigation_link } from "@/data/link";
import Link from "next/link";
import {
  changeBarColor,
  mobileAnimateNavigation,
  mobileReverseNavigation,
} from "@/src/animation/mobileNavigation";
import gsap from "gsap";
import { Store } from "@/context";

export default function MobileNavigation({ isDark = false }) {
  const [opened, setOpened] = React.useState(false);
  const [currentLocation, setCurrentLocation] = React.useState("/");
  const navigationRef = React.useRef(null);
  const navigationRef2 = React.useRef(null);
  const { height } = React.useContext(Store);

  React.useEffect(() => {
    changeBarColor(".dark__section", "#ffffff", "#1F1D1D");
    changeBarColor(".light__section", "#1F1D1D", "#ffffff");
    setCurrentLocation(window.location.pathname);
  }, []);

  return (
    <div
      className="navigation_mobile z-[90] flex lg:hidden w-auto font-[Arial] absolute right-0 items-center"
      style={{ height }}
    >
      <div
        className={`innerBox w-auto ${
          isDark ? "bg-white" : "bg-[#1F1D1D]"
        } h-[31vw] sm:px-0 sm:h-[22vw] absolute sm:top-0 right-0 sm:relative flex justify-center rounded-tl-3xl rounded-bl-3xl items-center`}
      >
        {!opened && (
          <button
            onClick={() => {
              if (opened) {
                mobileReverseNavigation(isDark);
              } else {
                mobileAnimateNavigation(isDark);
              }
              setOpened(!opened);
            }}
            className="w-12 block lg:hidden sm:w-16 tracking-wider trasform rotate-180 text-xl lg:text-[2vw] text-white"
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
        )}
        <button
          onClick={() => {
            setOpened(false);
            mobileReverseNavigation(isDark);
          }}
          className="cross_button_mobile hidden opacity-0 absolute top-8 right-8 lg:top-16 lg:right-16"
        >
          <span
            style={{ writingMode: "vertical-rl" }}
            className={`${isDark ? "text-black" : "text-white"} flex  `}
          >
            <svg
              className="w-[3vw]"
              viewBox="0 0 67 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 63L66 1M66 63L1 1"
                stroke="#F8F8F8"
                strokeOpacity="0.65"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
                  <span className=" opacity-50 items-center flex">
                    0{index + 1}.
                  </span>{" "}
                  <span className="ml-5 text-5xl lg:text-[6vw]">
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
              We would love to help you
              <br /> with your next project
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
                <button className="button w-14 h-14 flex justify-center bg-[#F0C808] hover:shadow-md items-center rounded-full">
                  <Image src={LinkedIn} />
                </button>
              </Link>
              <Link href={"https://www.instagram.com/incubr.tech/"}>
                <button className="button w-14 h-14 flex justify-center bg-[#F0C808] hover:shadow-md items-center rounded-full">
                  <Image src={Instagram} />
                </button>
              </Link>
              <Link
                href={"whatsapp://send?text=Hello World!&phone=+919999988493"}
              >
                <button className="button w-14 h-14 flex justify-center bg-[#F0C808] hover:shadow-md items-center rounded-full">
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
