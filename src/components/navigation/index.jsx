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

export default function Navigation() {
  const [height, setHeight] = React.useState(0);
  const [opened, setOpened] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="navigation flex w-auto font-[Arial] z-[40] absolute right-0 lg:left-0  items-center"
      style={{ height }}
    >
      <div className="innerBox w-auto transform rotate-180 lg:rotate-0 bg-[#1F1D1D] h-72 lg:h-[22vw] flex justify-center rounded-tr-xl rounded-br-xl items-center">
        <button
          onClick={() => {
            if (opened) {
              reverseNavigation();
            } else {
              animateNavigation();
            }
            setOpened(!opened);
          }}
          className="w-12 hidden lg:block lg:w-16 tracking-wider trasform rotate-180 text-xl lg:text-[2vw] text-white"
        >
          {opened ? (
            <span
              style={{ writingMode: "vertical-rl" }}
              className="text-gray-500 hover:text-white"
            >
              CLOSE
            </span>
          ) : (
            <span style={{ writingMode: "vertical-rl" }} className="text-white">
              MENU
            </span>
          )}
        </button>
        <button
          onClick={() => {
            if (opened) {
              reverseNavigation(true);
            } else {
              animateNavigation(true);
            }
            setOpened(!opened);
          }}
          className={`w-12 ${
            opened ? "hidden" : "block"
          } lg:hidden lg:w-16 tracking-wider trasform rotate-180 text-xl lg:text-[2vw] text-white`}
        >
          <span style={{ writingMode: "vertical-rl" }} className="text-white">
            MENU
          </span>
        </button>
        <button
          onClick={() => {
            setOpened(false);
            reverseNavigation(true);
          }}
          className="cross_button hidden opacity-0 absolute top-8 right-8 lg:top-16 lg:right-16"
        >
          <Image src={Cross} />
        </button>
        <div
          id="navigation__list"
          className="hidden button flex-col lg:flex-row flex-1 px-10 lg:px-0 lg:ml-20"
        >
          <ul className="flex flex-col flex-[2] cursor-pointer space-y-5">
            <li className="flex text-white text-start opacity-0 ">
              <span className="mt-6 opacity-50">01.</span>{" "}
              <span className="ml-5 text-5xl lg:text-[7vw]">Home</span>
            </li>
            <li className="flex text-gray-500 hover:text-white opacity-0 ">
              <span className="mt-6 opacity-50">02.</span>{" "}
              <span className="ml-5 text-5xl lg:text-[7vw]">Services</span>
            </li>
            <li className="flex text-gray-500 hover:text-white opacity-0 ">
              <span className="mt-6 opacity-50">03.</span>{" "}
              <span className="ml-5 text-5xl lg:text-[7vw]">Work</span>
            </li>
            <li className="flex text-gray-500 hover:text-white opacity-0 ">
              <span className="mt-6 opacity-50">04.</span>{" "}
              <span className="ml-5 text-5xl lg:text-[7vw]">Testimonies</span>
            </li>
          </ul>
          <div
            id="button_section"
            className=" hidden flex-1 flex-col justify-end mt-10 lg:mt-0 space-y-5 lg:space-y-[1.8vw]"
          >
            <h1 className="text-gray-500 text-2xl lg:text-[1.5vw]">Let's work together</h1>
            <button className="button rounded-full w-full lg:w-[20vw] tracking-wider hover:bg-[#F0C808] hover:shadow-md text-[#1F1D1D] bg-white py-3 px-4 flex items-center justify-center text-xl lg:text-[1.8vw]">
              START A PROJECT
            </button>
            <h1 className="text-gray-500 text-2xl lg:text-[1.5vw]">Follow us on </h1>
            <div className="flex space-x-3">
              <button className="button w-14 h-14 flex justify-center hover:bg-[#F0C808] hover:shadow-md items-center bg-white rounded-full">
                <Image src={LinkedIn} />
              </button>
              <button className="button w-14 h-14 flex justify-center hover:bg-[#F0C808] hover:shadow-md items-center bg-white rounded-full">
                <Image src={Instagram} />
              </button>
              <button className="button w-14 h-14 flex justify-center hover:bg-[#F0C808] hover:shadow-md items-center bg-white rounded-full">
                <Image src={WhatsApp} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
