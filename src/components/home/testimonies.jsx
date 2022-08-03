import React from "react";
import Description from "../common/Description";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import { brands } from "../../../data/brands";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { slides } from "@/data/testimonials";
import Link from "next/link";
import { GSAPVerticleScroll } from "@/src/animation/horizontalScroll";
import { motion, useInView } from "framer-motion";

const Pagination = ({ activeIndex }) => {
  const swiper = useSwiper();
  return (
    <span className="mt-10 flex button text-[1.3vw] justify-center space-x-2">
      {slides.map((e, index) => (
        <span
          key={"sadashjgjhd" + e.id}
          onClick={() => swiper.slideTo(index)}
          className={`w-4 h-4 ${
            activeIndex % slides.length === index
              ? "bg-white"
              : "bg-transparent"
          } border border-white rounded-full cursor-pointer`}
        />
      ))}
    </span>
  );
};

export default function Testimonies() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [autoplay, setAutoplay] = React.useState(false);
  const [link, setLink] = React.useState("");
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  React.useEffect(() => {
    GSAPVerticleScroll();
  }, []);

  React.useEffect(() => {
    if (isInView) {
      setAutoplay(true);
    }
  }, [isInView]);

  return (
    <>
      <div
        id="PageWrapTestomony"
        className=" flex dark__section flex-nowrap flex-col font-[PPNeueMontreal] p-4 h-[150vh]  bg-[#1F1D1D]"
      >
        <div className="testomony-item relative flex dark__section flex-nowrap flex-col justify-around sm:justify-center space-y-0 sm:space-y-[10vw] lg:space-y-0 lg:justify-around items-center font-[PPNeueMontreal] p-4 h-[100vh] lg:h-[100vh] bg-[#1F1D1D]">
          <div
            id="testimonies"
            className="flex flex-col w-full px-6 mt-10 text-white bg-[#1F1D1D]"
          >
            <div className="flex flex-1"></div>
            <div className="flex flex-1 justify-center items-center flex-col">
              <div className="flex px-5 py-2 text-[12vw] sm:text-[9vw] lg:mt-0 lg:text-[4vw] text-center font-[PPNeueMontreal] rounded-full tracking-wider">
                <h1 className="uppercase">testimonials</h1>
              </div>
              <div className="hidden lg:flex flex-1 justify-center items-center">
                <Description
                  text={
                    "Its truly gratifying when our customers find our\n work valuable and purposeful."
                  }
                />
              </div>
              <div className="lg:hidden flex flex-1 justify-center items-center">
                <span className="text-center sm:text-[3vw]">
                  Its truly gratifying when our customers find our work valuable
                  and purposeful.
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[45vw] h-[45vw] sm:w-[30vw] sm:h-[30vw] lg:w-[12vw] lg:h-[12vw] border border-[#FDFDFD] rounded-full p-2 lg:p-[1vw]">
            <div
              id="test_profile_pic"
              className="w-full h-full rounded-full bg-cover flex items-end justify-end "
            >
              <div className="flex bg-white w-[8vw] cursor-pointer h-[8vw] sm:w-[5vw] sm:h-[5vw] lg:w-[2.5vw] lg:h-[2.5vw] justify-center items-center rounded-full">
                <Link href={link || ""}>
                  <svg
                    viewBox="0 0 32 30"
                    fill="none"
                    className=" w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw] lg:w-[1.5vw] lg:h-[1.5vw]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.8864 10.4535H17.8288V13.2285C18.6848 11.6325 20.88 10.1985 24.1776 10.1985C30.4992 10.1985 32 13.3755 32 19.2045V30H25.6V20.532C25.6 17.2125 24.744 15.3405 22.5648 15.3405C19.5424 15.3405 18.2864 17.358 18.2864 20.5305V30H11.8864V10.4535ZM0.912 29.745H7.312V10.1985H0.912V29.745ZM8.2288 3.825C8.22904 4.32791 8.12265 4.82585 7.91582 5.28988C7.70899 5.75391 7.40584 6.17477 7.024 6.528C6.25024 7.24894 5.2029 7.65248 4.112 7.65C3.02302 7.64931 1.9781 7.2468 1.2032 6.5295C0.822738 6.17507 0.520617 5.75374 0.31415 5.28965C0.107682 4.82556 0.000926611 4.32784 0 3.825C0 2.8095 0.432 1.8375 1.2048 1.1205C1.97902 0.402238 3.02438 -0.000448816 4.1136 3.75397e-07C5.2048 3.75397e-07 6.2512 0.4035 7.024 1.1205C7.7952 1.8375 8.2288 2.8095 8.2288 3.825Z"
                      fill="#222222"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <motion.div
            ref={ref}
            className="flex flex-col w-full justify-around sm:justify-center flex-nowrap"
          >
            {autoplay && (
              <Swiper
                modules={[Autoplay]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop
                className="w-full px-10 sm:px-20 sm:w-2/3 lg:w-1/2 flex flex-col"
                onSlideChange={(e) => {
                  setActiveIndex(e.activeIndex);
                  document.getElementById(
                    "test_profile_pic"
                  ).style.backgroundImage = `url(${
                    slides[e.activeIndex % slides.length].backgroundImage
                  })`;
                  setLink(slides[e.activeIndex % slides.length].link);
                }}
              >
                {slides.map((_, index) => (
                  <SwiperSlide
                    key={"sadasd" + index}
                    className="w-full h-full flex flex-col justify-center items-center"
                  >
                    <div className=" text-white tracking-widest flex flex-col mt-5 items-center">
                      <h1 className=" font-bold text-[7vw] sm:text-[5vw] lg:leading-[2vw] lg:text-[1.7vw]">
                        {slides[activeIndex % slides.length].name}
                      </h1>
                      <span className="lg:leading-[2vw] text-center text-[4vw] sm:text-[2.8vw] lg:text-[1.3vw]">
                        {slides[activeIndex % slides.length].description}
                      </span>
                      <span className="mt-4 hidden lg:flex flex-col w-[70%] text-center lg:text-[1.3vw] items-center">
                        {slides[activeIndex % slides.length].text
                          .split("\n")
                          .map((text) => (
                            <span key={text} className="text-white">
                              {text}
                            </span>
                          ))}
                      </span>
                      <span className="mt-4 flex lg:hidden flex-col text-center text-[3.5vw] sm:text-[2vw] items-center">
                        {slides[activeIndex % slides.length].text
                          .split("\n")
                          .map((text, index) => (
                            <span key={text + index} className="text-white">
                              {text}
                            </span>
                          ))}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
                <Pagination activeIndex={activeIndex} />
              </Swiper>
            )}
          </motion.div>
        </div>
      </div>

      <div className="w-full h-[25vh] lg:h-[22vw] flex items-center bg-[#1F1D1D]">
        <Marquee
          gradient={false}
          speed={60}
          direction={"left"}
          className="w-full flex items-center justify-center overflow-x-auto"
        >
          {brands.map((items) => (
            <span
              key={items.src}
              className="flex-none -mr-48 sm:-mr-20 lg:mr-0"
            >
              <Image key={items.src} src={items} />
            </span>
          ))}
        </Marquee>
      </div>
    </>
  );
}
