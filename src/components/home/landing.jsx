import React from "react";
import { Store } from "../../../context";
import Headers from "../headers";
import ArrowDown from "../../../assets/arrowDown.svg";
import Image from "next/image";
import TextTransition, { presets } from "react-text-transition";
import { onmouseleave } from "../../custom-cursor";
import Navigation from "../navigation";

const TEXTS = ["Centered.", "Empathized.", "Focused.", "Desired."];

export const onMouseEnterOnTitle = () => {
   const customCursor = document.querySelector(".cursor");
   customCursor.style.width = "7rem";
   customCursor.style.height = "7rem";
 };

export default function Landing() {
  const { height } = React.useContext(Store);
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);


  return (
    <div
      className="w-full relative bg-[#FDFDFD] flex flex-col"
      style={{ height: height - height * 0.05 }}
    >
      <Navigation />
      <Headers />
      <div className="flex flex-1 justify-center items-center">
        <div className="lg:w-[60%] w-full mt-16 lg:mt-0 px-6 sm:px-16 lg:px-0">
          <div
            className=" font-[Arial] text-5xl sm:text-8xl lg:text-[4.3vw] flex flex-col"
            onMouseEnter={onMouseEnterOnTitle}
            onMouseLeave={onmouseleave}
          >
            <div className="flex flex-col lg:flex-row">
              Human.&nbsp;
              <TextTransition springConfig={presets.gentle}>
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </div>
            <span className=" font-[Arial] text-5xl sm:text-8xl lg:text-[4.3vw]">
              Solutions.
            </span>
          </div>
          <span className="hidden font-[PPNeueMontreal] leading-[1.5] flex-col lg:flex mt-10 text-sm lg:text-[1.5vw] tracking-wide font-[350]">
            {`We are a new age brand incubator. We engineer,\n
            design and scale digital products to get you
            \n massive growth. We are customer centric, a \n
            seasoned team and easy to work with.`
              .split("\n")
              .map((line, i) => (
                <span key={i + line}>{line}</span>
              ))}
          </span>
          <span className="flex font-[PPNeueMontreal] leading-[1.5] flex-col lg:hidden mt-10 text-lg sm:text-3xl lg:text-[1.5vw] tracking-wide font-[350]">
            {`We are a new age brand incubator.\n 
            We engineer, design and scale\n 
            digital products to get you massive\n
             growth. We are customer centric, a \n
            seasoned team and easy to work\n with.`
              .split("\n")
              .map((line, i) => (
                <span key={i + line}>{line}</span>
              ))}
          </span>
        </div>
      </div>
      <div className="flex w-full lg:absolute bottom-10 justify-center">
        <div className="flex w-[85%] justify-end">
          <div
            onClick={() => window.scrollTo(0, height)}
            className="button cursor-pointer w-32 lg:w-48 h-32 lg:h-48 flex flex-col items-center justify-between"
          >
            <div className="lg:w-36 w-24 h-24 lg:h-36 bg-transparent border-black hover:border-transparent transition-colors duration-300 ease-in-out hover:bg-[#F0C808] flex rounded-full border justify-center items-center">
              <Image src={ArrowDown} />
            </div>
            <h1 className="font-bold text-xl lg:text-[1.6vw] font-[PPNeueMontreal] tracking-widest">
              welcome
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
