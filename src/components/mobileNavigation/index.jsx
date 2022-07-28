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

export default function MobileNavigation({ isDark = false }) {
  const [opened, setOpened] = React.useState(false);
  const [currentPosition, setCurrentPosition] = React.useState({ x: 0, y: 0 });
  const [final, setFinal] = React.useState(false);
  const [currentLocation, setCurrentLocation] = React.useState("/");
  const navigationRef = React.useRef(null);
  const navigationRef2 = React.useRef(null);

  React.useEffect(() => {
    changeBarColor(".dark__section", "#ffffff", "#1F1D1D");
    changeBarColor(".light__section", "#1F1D1D", "#ffffff");
    setCurrentLocation(window.location.pathname);
  }, []);

  const revelElement = () => {
    gsap.to(
      ".navigation__mobile .innerbox__mobile #navigation__list__mobile ul li",
      {
        duration: 0.2,
        translateY: 0,
        ease: "power2.inOut",
        stagger: 0.1,
        opacity: 0.5,
      }
    );

    gsap.to(".navigation__mobile .innerbox__mobile #button_section__mobile", {
      duration: 0.2,
      display: "flex",
      opacity: 1,
    });

    gsap.to(".cross_button", {
      duration: 0.2,
      opacity: 1,
      ease: "power2.inOut",
      display: "flex",
    });
  };

  const onTouchStart = (e) => {
    setCurrentPosition({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });
    document.body.style.overflowY = "hidden";
    document.getElementById("hanger").style.opacity = 0;
    document.getElementById("navigation__list__mobile").style.display = "flex";
    document.getElementById("navigation__mobile").style.zIndex = 100;
    revelElement();
  };

  const onTouchMove = (e) => {
    const { clientY, clientX } = e.touches[0];
    document.getElementById("navigation__mobile").style.height = clientY + "px";
    document.getElementById("innerbox__mobile").style.height = clientY + "px";

    if (clientY > currentPosition.y) {
      setFinal(true);
    } else {
      setFinal(false);
    }
    setCurrentPosition({ x: clientX, y: clientY });
  };

  const onTouchEnd = (e) => {
    if (final) {
      setOpened(true);
      gsap.to("#navigation__mobile", {
        height: "100vh",
      });
      gsap.to("#innerbox__mobile", {
        height: "100vh",
      });

      // mobileAnimateNavigation();
    } else {
      setOpened(false);
      gsap.to("#navigation__mobile", {
        height: "31vw",
      });
      gsap.to("#innerbox__mobile", {
        height: "2vw",
      });
      mobileReverseNavigation();
    }
    document.body.style.overflowY = "auto";
  };

  function is_touch_enabled() {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }

  return (
    <div
      ref={navigationRef}
      id="navigation__mobile"
      className="navigation__mobile  flex sm:hidden h-[0vw]  w-full sm:w-16 font-[Arial] z-[40] absolute right-0 sm:left-0 sm:items-center"
    >
      <div
        ref={navigationRef2}
        id="innerbox__mobile"
        className={`innerbox__mobile ${
          isDark ? "bg-[#fff]" : "bg-[#1F1D1D]"
        } w-full flex z-[41] h-[0vw]`}
      >
        <div
          // onTouchStart={onTouchStart}
          // onTouchMove={onTouchMove}
          // onTouchCancel={onTouchEnd}
          // onTouchEnd={onTouchEnd}
          onClick={() => {
            mobileAnimateNavigation();
          }}
          id="navigation__trigger"
          className=" flex absolute right-[10vw] z-[1001] top-[12.6vw]"
        >
          {/* <svg
            viewBox="0 0 26 91"
            fill="none"
            id="hanger"
            className=" w-[4vw] h-[28vw] "
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6166 60.6799C12.9921 60.3044 13.6009 60.3044 13.9764 60.6799L22.1353 68.8388C27.0169 73.7204 27.0169 81.635 22.1353 86.5165V86.5165C17.2537 91.3981 9.29431 91.3532 4.41276 86.4716V86.4716C-0.419483 81.6394 -0.463898 73.7604 4.36835 68.9281L12.6166 60.6799Z"
              fill={isDark ? "#fff" : "#1F1D1D"}
            />
            <path d="M12 0H14.5V66H12V0Z" fill={isDark ? "#fff" : "#1F1D1D"} />
          </svg> */}
          <svg
            // width="6"
            // height="24"
            className=" w-[4vw] h-[5.5vw] "
            viewBox="0 0 6 24"
            fill="none"
            id="hanger"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="3"
              cy="3"
              r="3"
              // fill="black"
              fill={isDark ? "#fff" : "#1F1D1D"}
            />
            <circle
              cx="3"
              cy="12"
              r="2.5"
              stroke={isDark ? "#fff" : "#1F1D1D"}
            />
            <circle cx="3" cy="21" r="3" fill={isDark ? "#fff" : "#1F1D1D"} />
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
          className="hidden button overflow-hidden bg-[#1F1D1D] flex-col w-full justify-center items-center"
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
            className=" flex-col mt-10 opacity-0 hidden items-center space-y-5 "
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
