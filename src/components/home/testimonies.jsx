import React from "react";
import Description from "../common/Description";
import HeadingText from "../common/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import { brands } from "../../../data/brands";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import ArrowDown from "../../../assets/arrowDown.svg";

export default function Testimonies() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <>
      <div className="flex flex-col w-full bg-[#FDFDFD] h-[25vw]">
        <div className="flex flex-1"></div>
        <div className="flex flex-1 justify-center items-center flex-col">
          <HeadingText text={"explore our work"} />
          <div className="flex flex-1 justify-center items-center">
            <Description
              text={
                "Its truly gratifying when our customers find our\n work valuable and purposeful."
              }
            />
          </div>
        </div>
      </div>
      <div className="flex flex-nowrap flex-col justify-center font-[PPNeueMontreal] p-4 mt-10 h-[100vh] bg-[#110A0A]">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
          }}
          loop
          className="w-1/2 flex "
          onSlideChange={(e) => setActiveIndex(e.activeIndex)}
        >
          {[1, 2, 5].map((item, index) => (
            <SwiperSlide
              key={"sadasd" + index}
              className="w-full h-full flex flex-col justify-center items-center"
            >
              <div className="flex w-[15vw] h-[15vw] border border-[#FDFDFD] rounded-full p-[1vw]">
                <div className="w-full h-full rounded-full bg-[#FDFDFD]"></div>
              </div>
              <div className=" text-white tracking-widest flex flex-col mt-5 items-center">
                <h1 className=" font-bold text-[1.7vw]">NAME HERE</h1>
                <span className="text-[1.3vw]">DESIGNATION @ COMPANY</span>
                <span className="mt-8 flex flex-col text-[1.3vw] items-center">
                  {`
                We are a new age brand incubator. We engineer,\n
                 design and scale digital products to get you\n
                  massive growth. We are customer centric, a\n
                   seasoned team and easy to work with.`
                    .split("\n")
                    .map((text) => (
                      <span className="text-white">{text}</span>
                    ))}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <span className="mt-10 flex  text-[1.3vw] justify-center space-x-2">
          {[1, 2, 5].map((e, index) => (
            <span
              key={"sadasd" + e}
              className={`w-4 h-4 ${
                activeIndex % 3 === index ? "bg-transparent" : "bg-white"
              } border border-white rounded-full`}
            />
          ))}
        </span>
      </div>

      <div className="w-full h-[22vw] items-center bg-[#110A0A]">
        <Marquee
          gradient={false}
          speed={60}
          direction={"left"}
          className="w-full flex items-center overflow-x-auto"
        >
          {brands.map((item) => (
            <span key={item.src} className="flex-none -mr-48 sm:-mr-20 lg:mr-0">
              <Image key={item.src} src={item} />
            </span>
          ))}
        </Marquee>
      </div>

      <div className="flex w-full bg-[#FDFDFD] bottom-10 h-[28vw] items-center justify-center">
        <div className="flex w-[100%] justify-center">
          <div className="w-48 h-48 z-50 flex flex-col items-center justify-center">
            <div className="w-36 h-36 bg-transparent border-black hover:border-transparent transition-colors duration-300 ease-in-out hover:bg-[#F0C808] flex rounded-full border justify-center items-center">
              <Image src={ArrowDown} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
