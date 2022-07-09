import React from "react";
import { Store } from "../../../context";
import Headers from "../headers";
import ArrowDown from "../../../assets/arrowDown.svg";
import Image from "next/image";
import TextTransition, { presets } from "react-text-transition";
import { onmouseleave } from "../../custom-cursor";
import Navigation from "../navigation";

const TEXTS = ["Centered.", "Empathized.", "Focused.", "Desired."];

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

  const onMouseEnterOnTitle = () => {
    const customCursor = document.querySelector(".cursor");
    customCursor.style.width = "7rem";
    customCursor.style.height = "7rem";
  }

  return (
    <div
      className="w-full relative bg-[#FDFDFD] flex flex-col"
      style={{ height }}
    >
      <Navigation />
      <Headers />
      <div className="flex flex-1 justify-center items-center">
        <div className="w-[60%]">
          <div
            className=" font-[Arial] text-[4.3vw] -space-y-3 flex flex-col"
            onMouseEnter={onMouseEnterOnTitle}
            onMouseLeave={onmouseleave}
          >
            <div className="flex">
              Human.&nbsp;
              <TextTransition springConfig={presets.gentle}>
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </div>
            <span className=" font-[Arial] text-[4.3vw]">Solutions.</span>
          </div>
          <span className=" font-[PPNeueMontreal] leading-[1.5] mt-10 text-[1.5vw] tracking-wide font-[350]">
            We are a new age brand incubator. We engineer, <br />
            design and scale digital products to get you
            <br /> massive growth. We are customer centric, a <br />
            seasoned team and easy to work with.
          </span>
        </div>
      </div>
      <div className="flex w-full absolute bottom-10 justify-center">
        <div className="flex w-[85%] justify-end">
          <div onClick={() => window.scrollTo(0, height - 200)} className="button cursor-pointer w-48 h-48 flex flex-col items-center justify-between">
            <div className="w-36 h-36 bg-transparent border-black hover:border-transparent transition-colors duration-300 ease-in-out hover:bg-[#F0C808] flex rounded-full border justify-center items-center">
              <Image src={ArrowDown} />
            </div>
            <h1 className="font-bold text-[1.6vw] font-[PPNeueMontreal] tracking-widest">
              welcome
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
