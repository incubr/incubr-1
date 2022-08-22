import React from "react";
import { Store } from "../../../context";
import Headers from "../headers";
import { onmouseleave } from "../../custom-cursor";
import Navigation from "../navigation";
import Link from "next/link";
import MobileNavigation from "../mobileNavigation";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper"
import "swiper/css";
import DownArrow from "../common/DownArrow";

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
            className=" font-[Arial] leading-[14vw] text-[12vw] sm:text-[10vw] sm:leading-[11vw] lg:leading-[5vw] lg:text-[4.3vw] justify-center flex flex-col"
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
                  className="h-[15vw]  sm:h-[8.5vw] lg:h-[6vw] flex  m-0 w-auto"
                  loop
                >
                  {TEXTS.map((text, index) => (
                    <SwiperSlide
                      key={index + text}
                      className="w-auto bg-white flex justify-center items-center lg:justify-start lg:items-end"
                    >
                      {text}
                    </SwiperSlide>
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
          <span className="flex font-[PPNeueMontreal] text-center lg:text-start leading-[1.5] flex-col lg:hidden mt-[5vw] sm:mt-[3.5vw] text-[3.5vw] sm:text-[2.5vw] lg:text-[1.5vw] tracking-wide font-[350]">
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
      <DownArrow title={"Welcome"} />
    </div>
  );
}
