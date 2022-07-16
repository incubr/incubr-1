import React from "react";
import Footer from "@/src/components/footer";
import About from "@/src/components/home/about";
import Landing from "@/src/components/home/landing";
import Testimonies from "@/src/components/home/testimonies";
import OurWork from "@/src/components/home/work";
import { Store } from "@/context";
import Lottie from "react-lottie";
import Animated from "@/assets/lf20_fnddduvc.json";

export default function Home() {
  const { seconds, canShow, height } = React.useContext(Store);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animated,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-full scroll-smooth">
      {canShow && (
        <div
          className="fixed  loading-animation top-0 left-0  w-full bg-[#1D1D1D] z-[100]"
          style={{ height }}
        >
          <div className="flex flex-1 justify-center h-[80%] sm:h-[90%] lg:h-full items-center">
            <div className=" mt-16 lg:mt-0 px-6 text-white sm:px-16 lg:px-0">
              <div className=" font-[Arial] text-4xl sm:text-7xl lg:text-[4.3vw] flex flex-col">
                <span className=" font-[Arial] text-4xl sm:text-7xl lg:text-[4.3vw]">
                  Incubr
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full font-[PPNeueMontreal] absolute bottom-20 justify-center">
            <div className="flex w-[85%] items-end justify-center flex-col">
              <div className=" cursor-pointer w-32 lg:w-36 relative h-32 lg:h-36 flex flex-col items-center justify-between">
                <div className=" w-full h-full animate-spin  bg-transparent  border-white hover:border-transparent transition-colors duration-300 ease-in-out hover:bg-[#F0C808] flex rounded-full border-b justify-center items-center"></div>
                <span className="absolute text-white text-2xl h-full w-full flex justify-center items-center">
                  {seconds}%
                </span>
              </div>
              <h1 className="font-bold mt-5 animate-pulse flex justify-center items-center text-xl lg:text-[1.6vw] text-white font-[PPNeueMontreal] tracking-widest">
                Loading
                <Lottie options={defaultOptions} height={20} width={40} />
              </h1>
            </div>
          </div>
        </div>
      )}
      <Landing />
      <About />
      <OurWork />
      <Testimonies />
      <Footer />
    </div>
  );
}
