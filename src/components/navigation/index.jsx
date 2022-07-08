import React from "react";
import {
  animateNavigation,
  reverseNavigation,
} from "../../animation/navigation";
import WhatsApp from "../../../assets/whatsapp.svg";
import Instagram from "../../../assets/instagram.svg";
import LinkedIn from "../../../assets/linkedin.svg";
import Image from "next/image";
import Cross from "../../../assets/cross.svg";

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
      className="navigation flex w-auto font-[Arial] z-[60] absolute items-center"
      style={{ height }}
    >
      <div className="innerBox w-auto bg-[#1F1D1D] h-72 flex justify-center rounded-tr-xl rounded-br-xl items-center">
        <button
          onClick={() => {
            if (opened) {
              reverseNavigation();
            } else {
              animateNavigation();
            }
            setOpened(!opened);
          }}
          className="w-16 tracking-wider trasform rotate-180 text-[2vw] text-white"
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
              className="text-white"
            >
              MENU
            </span>
          )}
        </button>
        <button
          onClick={() => {
            setOpened(false);
            reverseNavigation();
          }}
          className="cross_button hidden opacity-0 absolute top-16 right-16"
        >
          <Image src={Cross} />
        </button>
        <div id="navigation__list" className="hidden flex-1 ml-20">
          <ul className="flex flex-col flex-[2] -space-y-8 cursor-pointer">
            <li className="flex text-white text-start opacity-0 -translate-y-36">
              <span className="mt-6 opacity-50">01.</span>{" "}
              <span className="ml-5 text-[7vw]">Home</span>
            </li>
            <li className="flex text-gray-500 hover:text-white opacity-0 -translate-y-36">
              <span className="mt-6 opacity-50">02.</span>{" "}
              <span className="ml-5 text-[7vw]">Services</span>
            </li>
            <li className="flex text-gray-500 hover:text-white opacity-0 -translate-y-36">
              <span className="mt-6 opacity-50">03.</span>{" "}
              <span className="ml-5 text-[7vw]">Work</span>
            </li>
            <li className="flex text-gray-500 hover:text-white opacity-0 -translate-y-36">
              <span className="mt-6 opacity-50">04.</span>{" "}
              <span className="ml-5 text-[7vw]">Testimonies</span>
            </li>
          </ul>
          <div
            id="button_section"
            className=" hidden flex-1 flex-col justify-end space-y-4"
          >
            <h1 className="text-gray-500">Let's work together</h1>
            <button className=" rounded-full w-2/3 tracking-wider text-[#1F1D1D] bg-white py-3 px-4 flex items-center justify-center text-xl">
              START A PROJECT
            </button>
            <h1 className="text-gray-500">Follow us on </h1>
            <div className="flex space-x-3">
              <button className="w-14 h-14 flex justify-center items-center bg-white rounded-full">
                <Image src={LinkedIn} />
              </button>
              <button className="w-14 h-14 flex justify-center items-center bg-white rounded-full">
                <Image src={Instagram} />
              </button>
              <button className="w-14 h-14 flex justify-center items-center bg-white rounded-full">
                <Image src={WhatsApp} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
