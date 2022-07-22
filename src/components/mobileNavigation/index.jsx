import React from "react";
import WhatsApp from "@/assets/whatsapp.svg";
import Instagram from "@/assets/instagram.svg";
import LinkedIn from "@/assets/linkedin.svg";
import Image from "next/image";
import { navigation_link } from "@/data/link";
import Link from "next/link";
import SmallCross from "@/assets/smallcross.svg";
import {
  changeBarColor,
  changeBarColorBack,
  mobileAnimateNavigation,
  mobileReverseNavigation,
} from "@/src/animation/mobileNavigation";

export default function MobileNavigation({ isDark = false }) {
  const [opened, setOpened] = React.useState(false);
  const [isRight, setIsRight] = React.useState(false);
  const [currentLocation, setCurrentLocation] = React.useState("/");

  React.useEffect(() => {
    changeBarColor(".dark__section", "#ffffff", "#1F1D1D");
    changeBarColor(".light__section", "#1F1D1D", "#ffffff");
    setCurrentLocation(window.location.pathname);
  }, []);

  return (
    <div className="navigation__mobile  flex sm:hidden h-[31vw]  w-full sm:w-16 font-[Arial] z-[40] fixed right-0 sm:left-0 sm:items-center">
      <div
        className={`innerbox__mobile ${
          isDark ? "bg-[#fff]" : "bg-[#1F1D1D]"
        } w-full flex z-[41] h-[2vw]`}
      >
        <div
          onClick={() => {
            setOpened(!opened);
            mobileAnimateNavigation();
          }}
          id="navigation__trigger"
          className=" flex fixed right-[5vw] top-[-5vw]"
        >
          <svg
            viewBox="0 0 26 91"
            fill="none"
            className=" w-[4vw] h-[28vw] "
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6166 60.6799C12.9921 60.3044 13.6009 60.3044 13.9764 60.6799L22.1353 68.8388C27.0169 73.7204 27.0169 81.635 22.1353 86.5165V86.5165C17.2537 91.3981 9.29431 91.3532 4.41276 86.4716V86.4716C-0.419483 81.6394 -0.463898 73.7604 4.36835 68.9281L12.6166 60.6799Z"
              fill={isDark ? "#fff" : "#1F1D1D"}
            />
            <path d="M12 0H14.5V66H12V0Z" fill={isDark ? "#fff" : "#1F1D1D"} />
          </svg>
        </div>
        <button
          onClick={() => {
            setOpened(false);
            mobileReverseNavigation();
          }}
          className="cross_button hidden opacity-0 absolute top-8 right-8 lg:top-16 lg:right-16"
        >
          <span
            style={{ writingMode: "vertical-rl" }}
            className={`${
              isDark ? "text-black" : "text-white"
            } flex sm:hidden relative`}
          >
            <svg
              width="28"
              height="27"
              viewBox="0 0 28 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 26L27 1M27 26L1 1"
                stroke="#F8F8F8"
                strokeOpacity="0.56"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
        <div
          id="navigation__list__mobile"
          className="hidden button bg-[#1F1D1D] flex-col w-full justify-center items-center"
        >
          <ul className="flex flex-col items-center cursor-pointer space-y-5">
            {navigation_link.map((item, index) => (
              <Link key={item.id} href={item.link}>
                <li
                  onClick={() => {
                    setOpened(false);
                    mobileReverseNavigation();
                  }}
                  id={currentLocation === item.link ? "active" : ""}
                  className={`flex text-white mix-blend-difference hover:opacity-100 opacity-0 -translate-y-40 transition-colors ease-in-out duration-200 text-start  `}
                >
                  {/* <span className="mt-6 opacity-50">0{index + 1}.</span>{" "} */}
                  <span className="text-5xl lg:text-[7vw]">{item.name}</span>
                </li>
              </Link>
            ))}
          </ul>
          <div
            id="button_section__mobile"
            className=" flex-col mt-10 opacity-0 flex items-center space-y-5 "
          >
            <h1 className="text-gray-500 text-2xl lg:text-[1.5vw]">
              Let's work together
            </h1>
            <Link href={"/start-a-project"}>
              <button className="button start-a-project relative overflow-hidden text-black bg-white rounded-full w-full sm:w-[50vw] lg:w-[20vw] tracking-wider hover:bg-[#F0C808] hover:shadow-md  py-3 px-4 flex items-center justify-center text-xl lg:text-[1.8vw]">
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
