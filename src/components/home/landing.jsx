import React from "react";
import { Store } from "../../../context";
import Headers from "../headers";
import ArrowDown from "../../../assets/arrowDown.svg";
import Image from "next/image";
import TextTransition, { presets } from "react-text-transition";
import { onmouseleave } from "../../custom-cursor";
import Navigation from "../navigation";
import Link from "next/link";

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
        <div className="lg:w-[60%] w-full mt-16 lg:mt-0 px-5 sm:px-16 lg:px-0">
          <div
            className=" font-[Arial] leading-[16vw] text-[14vw] sm:text-8xl lg:text-[4.3vw] flex flex-col"
            onMouseEnter={onMouseEnterOnTitle}
            onMouseLeave={onmouseleave}
          >
            <div className="flex flex-col lg:flex-row">
              Human.&nbsp;
              <TextTransition springConfig={presets.gentle}>
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </div>
            <span className=" font-[Arial] leading-[16vw] text-[14vw] sm:text-8xl lg:text-[4.3vw]">
              Solutions.
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
          <span className="flex font-[PPNeueMontreal] leading-[1.5] flex-col lg:hidden mt-[4vw] text-[4vw] sm:text-3xl lg:text-[1.5vw] tracking-wide font-[350]">
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
          <Link href={"/start-a-project"}>
            <button className="sm:hidden mt-[4vw] button rounded-full tracking-wider hover:shadow-md text-white bg-[#1F1D1D] hover:bg-[#F0C808] hover:text-black transition-colors ease-in-out duration-200 py-2 px-4 flex items-center justify-center text-xl">
              START A PROJECT
            </button>
          </Link>
        </div>
      </div>
      <div className="flex w-full lg:absolute bottom-10 justify-center">
        <div className="flex w-[85%] justify-end">
          <div
            onClick={() => window.scrollTo(0, height)}
            className="button cursor-pointer sm:w-32 lg:w-48 sm:h-32 lg:h-48 flex flex-col items-center justify-between"
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
