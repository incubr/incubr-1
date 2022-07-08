import React from "react";
import { Store } from "../../../context";
import TiltedArrow from "../../../assets/tiltedarrow.svg";
import Image from "next/image";
import { onmouseleave } from "../../custom-cursor";

export default function About() {
  const { height } = React.useContext(Store);

  const onMouseEnter = () => {
    const customCursor = document.querySelector(".cursor");
    customCursor.style.width = "12rem";
    customCursor.style.height = "12rem";
    customCursor.classList.replace("bg-black", "bg-white")
    customCursor.classList.replace("bg-opacity-25", "bg-opacity-100");
    customCursor.innerHTML = `<span className="font-bold font-[PPNeueMontreal] tracking-wider">explore</span><span className="font-bold font-[PPNeueMontreal] tracking-wider">furthur</span>`;
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onmouseleave}
      className=" bg-[#1F1D1D] text-white flex justify-center items-center"
      style={{ height }}
    >
      <div className="flex w-full">
        <div className="w-[20%] flex justify-end -mt-14 mr-10">
          <Image src={TiltedArrow} />
        </div>
        <div className="w-[60%] flex  ">
          <h1 className=" text-[7vw] font-[Arial] flex-1">WE DO</h1>
          <div className="flex flex-1 flex-col text-[1.5vw]">
            <div className="flex flex-col w-auto font-[PPNeueMontreal] ">
              <div className="flex flex-col w-auto space-y-4 tracking-wider">
                <span>WEB DESIGN &amp; DEVELOPMENT</span>
                <span>BUILD BRAND ASSETS</span>
                <span>FIND &amp; DEPLOY TECH. RESOURCES</span>
                <span>TECHNOLOGY SUPPORT</span>
              </div>
              <div className="flex justify-end mt-10 font-bold tracking-wider">
                <span>&amp; much more</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[20%]"></div>
      </div>
    </div>
  );
};
