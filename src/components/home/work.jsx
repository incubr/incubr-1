import React from "react";
import { GSAPHorizontalScroll } from "../../animation/horizontalScroll";
import Description from "../common/Description";
import HeadingText from "../common/Heading";
import Slides from "../common/slides";
import { onmouseleave } from "../../custom-cursor";

export default function OurWork() {
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    const handleSize = () => {
      const elementHeight = document.getElementById("PageWrap").scrollWidth;
      setHeight(elementHeight + 1000);
    }
    handleSize()
    window.addEventListener("resize", handleSize);
    GSAPHorizontalScroll();
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  const onMouseEnter = () => {
    const customCursor = document.querySelector(".cursor");
    customCursor.style.width = "10rem";
    customCursor.style.height = "10rem";
    customCursor.classList.replace("bg-black", "bg-white");
    customCursor.classList.replace("bg-opacity-25", "bg-opacity-100");
    customCursor.innerHTML = `
    <img src="/right.svg" width="70px" />
    <span className="font-bold pt-10 font-[PPNeueMontreal] tracking-wider">scroll</span>`;
  };

  return (
    <>
      <div className="flex flex-col w-full bg-[#FDFDFD] h-[25vw]">
        <div className="flex flex-1"></div>
        <div className="flex flex-1 justify-center items-center flex-col">
          <HeadingText text={"explore our work"} />
          <div className="flex flex-1 justify-center items-center">
            <Description
              text={"From metaverse of projects delivered and happy."}
            />
          </div>
        </div>
      </div>
      <div
        // style={{
        //   height: height,
        // }}
        onMouseLeave={onmouseleave}
        className="flex w-full h-[320vw] -z-10"
      >
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onmouseleave}
          id="PageWrap"
          className="flex flex-nowrap h-screen p-4 w-full my-10"
        >
          {[1, 2, 3].map((i) => (
            <Slides key={"sadasdasd" + i.toString()} />
          ))}
        </div>
      </div>
    </>
  );
}
