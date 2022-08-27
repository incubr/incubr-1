import React from "react";
import { Store } from "../../../context";
import { buttonMouseEnter, onmouseleave } from "../../custom-cursor";
import Link from "next/link";
import { onMouseEnterOnTitle } from "./landing";
import { SwiperSlide, Swiper, useSwiper } from "swiper/react";
import { about_data } from "@/data/about";

const Texts = [
  "WEB DESIGN & DEVELOPMENT",
  "BUILD BRAND ASSETS",
  "FIND & DEPLOY TECH RESOURCES",
  "TECHNOLOGY SUPPORT",
];

const Pagination = ({ activeIndex }) => {
  const swiper = useSwiper();
  return (
    <span className="sm:hidden mt-[8vw] flex button items-center overflow-hidden p-[0.1rem] h-3 bg-white bg-opacity-10 rounded-full text-[1.3vw]">
      {about_data.map((e, index) => (
        <span
          key={"sadashjgjhd" + e.id}
          onClick={() => swiper.slideTo(index)}
          className={`w-[20vw] h-full ${
            activeIndex % about_data.length === index
              ? "bg-white"
              : "bg-transparent"
          } cursor-pointer rounded-full`}
        />
      ))}
    </span>
  );
};

const CarosuelController = () => {
  const swiper = useSwiper();
  return (
    <div className="flex w-full pt-[8vw] sm:pt-[7vw] lg:pt-[4vw] items-center justify-center lg:justify-between">
      <div className=""></div>
      <div
        onMouseEnter={buttonMouseEnter}
        onMouseLeave={onmouseleave}
        className="flex text-black cursor-pointer justify-center lg:justify-start transition-colors ease-in-out duration-200 hover:text-black  font-bold tracking-wider"
      >
        <Link href={"/services"}>
          <span className="p-2 px-8 border text-white hover:text-black hover:border-[#F0C808] hover:bg-[#F0C808] border-white rounded-full">
            &amp; much more
          </span>
        </Link>
      </div>
      <div
        onClick={() => swiper.slideNext()}
        className="hidden lg:flex rounded-xl cursor-pointer items-center justify-center bg-white bg-opacity-25 h-[10vw] w-[10vw] sm:w-[6vw] sm:h-[6vw] lg:h-[3vw] lg:w-[3vw]"
      >
        <svg
          viewBox="0 0 12 22"
          className="h-[4vw] sm:h-[3vw] lg:h-[1vw]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.251753 0.24856C0.331354 0.16977 0.425917 0.107259 0.530025 0.0646069C0.634132 0.0219549 0.74574 0 0.858456 0C0.971171 0 1.08278 0.0219549 1.18689 0.0646069C1.29099 0.107259 1.38556 0.16977 1.46516 0.24856L11.7482 10.4012C11.828 10.4798 11.8914 10.5732 11.9346 10.676C11.9778 10.7787 12 10.8889 12 11.0002C12 11.1115 11.9778 11.2217 11.9346 11.3245C11.8914 11.4273 11.828 11.5206 11.7482 11.5992L1.46516 21.7519C1.30425 21.9107 1.08601 22 0.858456 22C0.630898 22 0.412661 21.9107 0.251753 21.7519C0.0908457 21.593 0.000448657 21.3775 0.000448657 21.1529C0.000448657 20.9282 0.0908457 20.7127 0.251753 20.5539L9.92985 11.0002L0.251753 1.44657C0.171951 1.36798 0.108636 1.27462 0.0654361 1.17183C0.0222361 1.06904 0 0.958852 0 0.847567C0 0.736282 0.0222361 0.62609 0.0654361 0.523302C0.108636 0.420515 0.171951 0.327152 0.251753 0.24856Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

const Card = ({ data }) => {
  const swiper = useSwiper();
  return (
    <div className="flex w-full h-full">
      <div className="w-full flex-col border justify-between border-opacity-50 p-[4vw] sm:p-[3vw] lg:p-[1.7vw] py-[7vw] sm:py-[4vw] lg:py-[2vw] rounded-xl border-white bg-white h-full flex bg-opacity-10">
        <h1 className="text-[7vw] sm:text-[3.5vw] lg:text-[2.5vw] lg:leading-[3vw] tracking-wide uppercase text-center sm:text-start">
          {data.title}
        </h1>
        <div className="flex flex-col">
          <span className="text-[3.5vw] sm:text-[1.7vw] lg:text-[1vw] text-center sm:text-start">
            {data.description}
          </span>
          <div className="pt-[8vw] sm:pt-[5vw] lg:pt-[2vw] flex">
            <div
              onClick={() => swiper.slideNext()}
              className="hidden sm:flex rounded-xl cursor-pointer items-center justify-center border border-white bg-opacity-25 h-[10vw] w-[10vw] sm:w-[6vw] sm:h-[6vw] lg:h-[3vw] lg:w-[3vw]"
            >
              <svg
                viewBox="0 0 12 22"
                className="h-[4vw] sm:h-[3vw] lg:h-[1vw]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.251753 0.24856C0.331354 0.16977 0.425917 0.107259 0.530025 0.0646069C0.634132 0.0219549 0.74574 0 0.858456 0C0.971171 0 1.08278 0.0219549 1.18689 0.0646069C1.29099 0.107259 1.38556 0.16977 1.46516 0.24856L11.7482 10.4012C11.828 10.4798 11.8914 10.5732 11.9346 10.676C11.9778 10.7787 12 10.8889 12 11.0002C12 11.1115 11.9778 11.2217 11.9346 11.3245C11.8914 11.4273 11.828 11.5206 11.7482 11.5992L1.46516 21.7519C1.30425 21.9107 1.08601 22 0.858456 22C0.630898 22 0.412661 21.9107 0.251753 21.7519C0.0908457 21.593 0.000448657 21.3775 0.000448657 21.1529C0.000448657 20.9282 0.0908457 20.7127 0.251753 20.5539L9.92985 11.0002L0.251753 1.44657C0.171951 1.36798 0.108636 1.27462 0.0654361 1.17183C0.0222361 1.06904 0 0.958852 0 0.847567C0 0.736282 0.0222361 0.62609 0.0654361 0.523302C0.108636 0.420515 0.171951 0.327152 0.251753 0.24856Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function About() {
  const { height } = React.useContext(Store);
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div
      className="dark__section bg-[#1F1D1D] py-[1.3vw] text-white flex justify-center items-center"
      style={{ height }}
    >
      <div className="flex flex-col w-[80%] lg:w-[60%] overflow-x-auto py-[2.7vw] pb-[2vw] h-full justify-center">
        <h1
          onMouseEnter={onMouseEnterOnTitle}
          onMouseLeave={onmouseleave}
          className=" text-[12vw] justify-center sm:justify-start text-center sm:text-left sm:text-[8vw] lg:text-[5vw] lg:leading-[5vw] items-center flex  font-[Arial]  cursor-pointer"
        >
          We Do
        </h1>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 1,
            },
          }}
          onSlideChange={(e) => {
            setActiveIndex(e.activeIndex);
          }}
          className="flex flex-col w-full overflow-x-auto mt-[3vw] h-[60vh] sm:h-[50vh] lg:h-full "
        >
          <div>
            {about_data.map((e, index) => (
              <SwiperSlide key={"about_" + e.id} className=" pr-[1vw]">
                <Card data={e} />
              </SwiperSlide>
            ))}
          </div>
          <Pagination activeIndex={activeIndex} />
          <CarosuelController />
        </Swiper>
      </div>
    </div>
  );
}
