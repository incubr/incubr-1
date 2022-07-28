import React from "react";
import { Store } from "../../../context";
import Headers from "../headers";
import TextTransition, { presets } from "react-text-transition";
import { onmouseleave } from "../../custom-cursor";
import Navigation from "../navigation";
import Link from "next/link";
import MobileNavigation from "../mobileNavigation";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper"
import "swiper/css";

const TEXTS = ["centered", "empathized", "focused", "desired"];

export const onMouseEnterOnTitle = () => {
  const customCursor = document.querySelector(".cursor");
  customCursor.style.width = "7rem";
  customCursor.style.height = "7rem";
};

export default function Landing() {
  const { height } = React.useContext(Store);
  const [index, setIndex] = React.useState(0);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    setWidth(window.innerWidth);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div
      className="w-full light__section relative bg-[#FDFDFD] flex flex-col"
      style={{ height: width > 1024 ? height - height * 0.05 : "95vh" }}
    >
      <Navigation />
      <MobileNavigation />
      <Headers />
      <div className="flex flex-1 justify-center items-center">
        <div className="lg:w-[60%] w-full mt-[16vw] sm:mt-16 lg:mt-0 px-5 sm:px-16 lg:px-0">
          <div
            className=" font-[Arial] leading-[14vw] text-[12vw] sm:text-8xl lg:text-[4.3vw] justify-center flex flex-col"
            onMouseEnter={onMouseEnterOnTitle}
            onMouseLeave={onmouseleave}
          >
            <div className="flex flex-col items-center overflow-hidden lg:items-end lg:flex-row">
              <span className=" z-[10] w-full lg:mr-[1.5vw] lg:w-auto flex justify-center">
                Human
              </span>
              {/* <TextTransition
                springConfig={presets.slow}
                className=" lg:ml-[2vw] overflow-hidden"
              >
                {TEXTS[index % TEXTS.length]}
              </TextTransition> */}
              <div className="flex">
                <Swiper
                  direction={"vertical"}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 3000,
                    pauseOnMouseEnter: false,
                    disableOnInteraction: false,
                  }}
                  speed={500}
                  modules={[Autoplay]}
                  className="h-[15vw] lg:h-[6vw] flex  m-0 w-auto"
                  loop
                >
                  {TEXTS.map((text, index) => (
                    <SwiperSlide key={index + text} className="w-auto h-full bg-white flex justify-center lg:justify-start lg:items-end">{text}</SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <span className=" font-[Arial] lg:mt-[0.5vw] items-center lg:items-start text-center lg:text-start">
              solutions
            </span>
          </div>
          <span className="hidden font-[PPNeueMontreal] leading-[1.5] flex-col lg:flex mt-10 text-sm lg:text-[1.5vw] tracking-wide font-[350]">
            {`We are a new-age all-in-one digital brand incubator\n
             that specializes in scaling your business through\n
              integrated solutions. We engineer, design, products\n
               and help you scale your business to reach your target\n
                group.`
              .split("\n")
              .map((line, i) => (
                <span key={i + line}>{line}</span>
              ))}
          </span>
          <span className="flex font-[PPNeueMontreal] text-center lg:text-start leading-[1.5] flex-col lg:hidden mt-[5vw] text-[3.5vw] sm:text-3xl lg:text-[1.5vw] tracking-wide font-[350]">
            {`We are a new-age all-in-one digital\n
             brand incubator that specializes in\n
              scaling your business through\n
               integrated solutions. We engineer,\n
                design, products and help you scale\n
                 your business to reach your target\n
                group.`
              .split("\n")
              .map((line, i) => (
                <span key={i + line}>{line}</span>
              ))}
          </span>
          <div className=" flex justify-center">
            <Link href={"/start-a-project"}>
              <button className="sm:hidden mt-[8vw] button rounded-full tracking-wider hover:shadow-md text-white bg-[#1F1D1D] hover:bg-[#F0C808] hover:text-black transition-colors ease-in-out duration-200 py-2 px-4 flex items-center justify-center text-xl">
                START A PROJECT
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full lg:absolute h-[18vh]  lg:h-auto bottom-10 justify-center">
        <div className="flex w-[85%] justify-center lg:justify-end">
          <div
            onClick={() => window.scrollTo(0, height)}
            className="button cursor-pointer sm:h-48 sm:w-48 lg:w-[12.5vw] lg:h-[12.5vw] flex flex-col items-center lg:justify-between"
          >
            <div className="lg:w-[10vw] sm:h-36 sm:w-36 w-[22vw] h-[22vw] lg:h-[10vw] border-black border bg-transparent hover:bg-[#F0C808]  hover:border-transparent transition-colors duration-300 ease-in-out flex rounded-full justify-center items-center">
              <svg
                width="31"
                height="74"
                viewBox="0 0 31 74"
                fillRule="none"
                className="lg:block hidden"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.5634 72.9347C16.2563 73.3974 15.8414 73.6958 15.4101 73.7642C14.9788 73.8327 14.5664 73.6657 14.2636 73.2999L0.561567 56.748C0.258733 56.3822 0.0903052 55.8476 0.0933311 55.2618C0.096357 54.6759 0.270591 54.0869 0.577705 53.6242C0.884817 53.1616 1.29965 52.8632 1.73095 52.7947C2.16225 52.7262 2.57468 52.8932 2.87751 53.2591L13.8231 66.4812L14.1483 3.09009C14.1498 2.79965 14.1934 2.50537 14.2766 2.22405C14.3598 1.94273 14.481 1.67987 14.6333 1.45049C14.7855 1.22111 14.9659 1.0297 15.164 0.887187C15.3621 0.744673 15.5742 0.653846 15.788 0.619894C16.0018 0.585942 16.2133 0.60953 16.4102 0.689308C16.6072 0.769087 16.7859 0.903495 16.936 1.08486C17.0861 1.26622 17.2048 1.49099 17.2853 1.74633C17.3657 2.00166 17.4063 2.28257 17.4048 2.57301L17.0751 65.9649L28.1754 49.2422C28.4825 48.7795 28.8973 48.4811 29.3286 48.4126C29.7599 48.3441 30.1723 48.5112 30.4752 48.877C30.778 49.2428 30.9464 49.7775 30.9434 50.3633C30.9404 50.9491 30.7661 51.5381 30.459 52.0008L16.5634 72.9347Z"
                  fill="#000"
                />
              </svg>
              <svg
                width="19"
                height="45"
                viewBox="0 0 19 45"
                fillRule="none"
                className="block lg:hidden"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.4456 43.5671C10.2643 43.8432 10.0192 44.0209 9.76423 44.0613C9.50926 44.1017 9.26528 44.0014 9.08597 43.7824L0.97272 33.8754C0.793406 33.6565 0.693447 33.3368 0.694834 32.9868C0.696219 32.6368 0.798837 32.2851 0.980111 32.009C1.16138 31.733 1.40647 31.5552 1.66144 31.5148C1.91642 31.4744 2.1604 31.5748 2.33971 31.7937L8.82084 39.7077L8.96946 1.83242C8.97014 1.65889 8.99572 1.48311 9.04473 1.31513C9.09374 1.14715 9.16522 0.990246 9.2551 0.853386C9.34497 0.716527 9.45147 0.602389 9.56852 0.517489C9.68557 0.432589 9.81088 0.378589 9.93729 0.358574C10.0637 0.338559 10.1887 0.35292 10.3053 0.400837C10.4218 0.448753 10.5275 0.529287 10.6164 0.637841C10.7053 0.746395 10.7756 0.880842 10.8234 1.03351C10.8711 1.18617 10.8953 1.35406 10.8946 1.5276L10.7433 39.4033L17.2953 29.4257C17.4766 29.1497 17.7216 28.9719 17.9766 28.9315C18.2316 28.8912 18.4756 28.9915 18.6549 29.2104C18.8342 29.4294 18.9342 29.7491 18.9328 30.0991C18.9314 30.4491 18.8288 30.8008 18.6475 31.0769L10.4456 43.5671Z"
                  fill="#000"
                />
              </svg>
            </div>
            <h1 className="font-bold text-xl text-black mt-[2vw] lg:mt-0 lg:text-[1.6vw] font-[PPNeueMontreal] tracking-widest">
              Welcome
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
