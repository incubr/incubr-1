import React from "react";
import Description from "../common/Description";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay} from "swiper";
// import {brands} from "../../../data/brands";
// import Image from "next/image";
import {slides} from "@/data/testimonials";
// import Link from "next/link";
import {motion} from "framer-motion";

// const Pagination=({activeIndex}) => {
//   const swiper=useSwiper();
//   return (
//     <span className=" flex button text-[1.3vw] justify-center space-x-2 mt-[2vw]">
//       {slides.map((e, index) => (
//         <span
//           key={"sadashjgjhd"+e.id}
//           // onClick={() => swiper.slideTo(index)}
//           className={`w-3 h-3 ${activeIndex%slides.length===index
//             ? "bg-[#FFA400]"
//             :"bg-transparent"
//             } border border-[#FFA400] rounded-full cursor-pointer`}
//         />
//       ))}
//     </span>
//   );
// };

const Title=() => {
  return (
    <div
      id="testimonies"
      className="flex flex-col w-full px-6 sm:mt-[1vh] mt-[7vh] text-black mb-9"
    >
      <div className="flex flex-1"></div>
      <div className="flex mt-24 sm:mt-0 justify-center items-center flex-col">
        <div className="flex px-5 py-2 text-[11vw] font-semibold sm:text-[9vw] lg:mt-0 lg:text-[3vw] text-center rounded-full tracking-wider">
          <h1 className="font-[Arial]">Testimonial</h1>
        </div>
        <div className="hidden lg:flex font-[PPNeueMontreal] flex-1 justify-center items-center">
          <Description text={"Its truly gratifying when our customers find our work valuable and purposeful."} />
        </div>
        <div className="lg:hidden flex flex-1 justify-center items-center">
          <span className="text-center sm:text-[3vw]">
            Its truly gratifying when our customers find our work valuable and
            purposeful.
          </span>
        </div>
      </div>
    </div>
  );
};

// const ProfilePic=({link}) => {
//   return (
//     <div className="flex w-[45vw] h-[45vw] sm:w-[25vw] sm:h-[25vw] z-20 lg:w-[12vw] lg:h-[12vw] lg:p-[1vw]">
//       <div
//         id="test_profile_pic"
//         className="w-full h-full bg-cover rounded-xl flex items-end justify-end "
//       >
//         <div className="flex bg-white w-[8vw] cursor-pointer h-[8vw] sm:w-[5vw] sm:h-[5vw] lg:w-[2.5vw] lg:h-[2.5vw] justify-center items-center rounded-full">
//           <Link href={link||""}>
//             <svg
//               viewBox="0 0 32 30"
//               fill="none"
//               className=" w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw] lg:w-[1.5vw] lg:h-[1.5vw]"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M11.8864 10.4535H17.8288V13.2285C18.6848 11.6325 20.88 10.1985 24.1776 10.1985C30.4992 10.1985 32 13.3755 32 19.2045V30H25.6V20.532C25.6 17.2125 24.744 15.3405 22.5648 15.3405C19.5424 15.3405 18.2864 17.358 18.2864 20.5305V30H11.8864V10.4535ZM0.912 29.745H7.312V10.1985H0.912V29.745ZM8.2288 3.825C8.22904 4.32791 8.12265 4.82585 7.91582 5.28988C7.70899 5.75391 7.40584 6.17477 7.024 6.528C6.25024 7.24894 5.2029 7.65248 4.112 7.65C3.02302 7.64931 1.9781 7.2468 1.2032 6.5295C0.822738 6.17507 0.520617 5.75374 0.31415 5.28965C0.107682 4.82556 0.000926611 4.32784 0 3.825C0 2.8095 0.432 1.8375 1.2048 1.1205C1.97902 0.402238 3.02438 -0.000448816 4.1136 3.75397e-07C5.2048 3.75397e-07 6.2512 0.4035 7.024 1.1205C7.7952 1.8375 8.2288 2.8095 8.2288 3.825Z"
//                 fill="#222222"
//               />
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

export default function Testimonies() {
  const [activeIndex, setActiveIndex]=React.useState(0);
  const [autoplay, setAutoplay]=React.useState(false);
  const [link, setLink]=React.useState("");
  // const ref = React.useRef(null);
  // const isInView = useInView(ref);

  React.useEffect(() => {
    // GSAPVerticleScroll();
  }, []);

  // React.useEffect(() => {
  //   if (isInView) {
  //     setAutoplay(true);
  //   }
  // }, [isInView]);

  return (
    <>
      <div
        id="PageWrapTestomony"
        className=" flex dark__section flex-nowrap flex-col font-[PPNeueMontreal]  h-[85vh]  bg-[#D9D9D926] bg-opacity-75"
      >
        <div className="testomony-item relative flex dark__section flex-nowrap flex-col justify-around sm:justify-center space-y-0 sm:space-y-[10vw] lg:space-y-[3vw] lg:justify-around items-center font-[PPNeueMontreal] h-[80vh] ">
          <Title />
          <motion.div
            // ref={ref}
            className="flex flex-col w-full justify-around relative flex-nowrap"
          >
            {/* <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop
              slidePerView={2}
              spaceBetween={30}
              className="px-10  w-[90%] overflow-auto sm:px-20 sm:w-[80%] "
              
            >
              {slides.map((slide, index) => (
                <SwiperSlide
                  key={"sadasd"+index}
                  style={{
                    height: "55vh",
                  }}
                  className="w-[30%] flex flex-col justify-center items-center bg-opacity-10 border-white border-opacity-80 rounded-2xl "
                >
                  <div className=" text-white tracking-widest flex flex-col mt-5 items-center">
                    <h1 className=" font-bold text-[7vw] sm:text-[5vw] lg:leading-[2vw] lg:text-[1.7vw]">
                      {slide.name}
                    </h1>
                    <span className="lg:leading-[2vw] text-[#FFA400] font-semibold text-center text-[4vw] sm:text-[2.8vw] lg:text-[1.3vw]">
                      {slide.description}
                    </span>
                    <span className="mt-4 hidden lg:flex flex-col w-[70%] text-center lg:text-[1.3vw] items-center">
                      {slide.text
                        .split("\n")
                        .map((text) => (
                          <span key={text} className="text-white">
                            {text}
                          </span>
                        ))}
                    </span>
                    <span className="mt-4 flex lg:hidden w-[90%] flex-col text-center text-[3.5vw] sm:text-[2vw] items-center">
                      {slide.text
                        .split("\n")
                        .map((text, index) => (
                          <span key={text+index} className="text-white">
                            {text}
                          </span>
                        ))}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper> */}
            <div className="flex w-full justify-center h-full items-center ">
              <div className="flex flex-col sm:flex-row w-[90%] space-x-0
              space-y-10 sm:space-y-0 sm:space-x-[2.5vw]">
                {slides.slice(1, 3).map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-1 border border-black p-5 h-[40vh] rounded-2xl relative sm:mt-0"
                  >
                    <span className="absolute -top-[5vh] sm:-top-[6vw] md:-top-[4.8vh] right-[2.5vw]">
                      <svg
                        width="80%"
                        height="80"
                        viewBox="0 0 104 82"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="104" height="82" rx="41" fill="#F9F9F9" />
                        <path
                          d="M72.8133 66C67.6625 66 63.4053 64.3854 60.0415 61.1562C56.6777 57.8229 54.9959 52.875 54.9959 46.3125C54.9959 40.375 56.3098 35.4271 58.9378 31.4688C61.5657 27.4063 64.6667 24.125 68.2407 21.625C71.9198 19.125 75.2835 17.25 78.332 16L83.3776 24.125C80.6445 25.1667 78.1743 26.4167 75.9668 27.875C73.8645 29.3333 72.1826 30.8958 70.9212 32.5625C69.6598 34.125 69.029 35.5833 69.029 36.9375C69.029 37.6667 69.1342 38.1354 69.3444 38.3437C69.6598 38.5521 70.0802 38.6563 70.6058 38.6563C71.0263 38.6563 71.7095 38.4479 72.6556 38.0313C73.7068 37.5104 75.1259 37.25 76.9129 37.25C79.9613 37.25 82.9046 38.2917 85.7427 40.375C88.5809 42.3542 90 45.8958 90 51C90 55.5833 88.4232 59.2292 85.2697 61.9375C82.1162 64.6458 77.964 66 72.8133 66ZM31.8174 66C26.6667 66 22.4094 64.3854 19.0456 61.1562C15.6819 57.8229 14 52.875 14 46.3125C14 40.375 15.314 35.4271 17.9419 31.4688C20.5698 27.4063 23.6708 24.125 27.2448 21.625C30.9239 19.125 34.2877 17.25 37.3361 16L42.3817 24.125C39.6487 25.1667 37.1784 26.4167 34.971 27.875C32.8686 29.3333 31.1867 30.8958 29.9253 32.5625C28.6639 34.125 28.0332 35.5833 28.0332 36.9375C28.0332 37.6667 28.1383 38.1354 28.3485 38.3437C28.6639 38.5521 29.0844 38.6563 29.61 38.6563C30.0304 38.6563 30.7137 38.4479 31.6598 38.0313C32.7109 37.5104 34.13 37.25 35.917 37.25C38.9654 37.25 41.9087 38.2917 44.7469 40.375C47.5851 42.3542 49.0042 45.8958 49.0042 51C49.0042 55.5833 47.4274 59.2292 44.2739 61.9375C41.1203 64.6458 36.9682 66 31.8174 66Z"
                          fill="#1F1D1D"
                        />
                      </svg>
                    </span>
                    <div className="flex w-full p-5 flex-col">
                      <div className="flex h-[24%]">
                        <div
                          style={{
                            backgroundImage: `url(${item.backgroundImage})`,
                          }}
                          className="flex border items-center justify-center bg-cover bg-center sm:h-[100%] h-[140%] w-[15%] sm:w-[18%] md:h-[120%] md:w-[20%] rounded-full lg:h-[140%] lg:w-[15%]"
                        ></div>
                        <p className="flex flex-col px-4">
                          <span className="flex font-semibold font-[Arial] sm:text-[2vw] md:text-[2.3vw] text-[5vw]">
                            {item.name}
                          </span>
                          <span className="flex sm:text-[1vw] text-[3vw] font-[PPNeueMontreal]">
                            {item.description}
                          </span>
                        </p>
                      </div>
                      <p className="flex flex-1 p-2 sm:text-[1.5vw] mt-[4vh] text-[2vw] sm:mt-[1.5vw] font-[PPNeueMontreal]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
