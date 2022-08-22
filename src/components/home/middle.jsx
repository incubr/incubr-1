import { Store } from "@/context";
import { buttonMouseEnter, onmouseleave } from "@/src/custom-cursor";
import Link from "next/link";
import React from "react";

export default function MiddleSection() {
  const { height } = React.useContext(Store);

  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div
      style={{ height: width > 1024 ? height - height * 0.05 : "95vh" }}
      className="flex h-screen w-full justify-center items-center"
    >
      <div className="flex lg:w-[60%] flex-col">
        <span className=" font-[Arial] leading-[14vw] text-[12vw] sm:text-[10vw] sm:leading-[11vw] lg:leading-[5vw] lg:text-[4.3vw] justify-center flex flex-col">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </span>
        <div className="flex justify-center items-center">
          <div
            onMouseEnter={buttonMouseEnter}
            onMouseLeave={onmouseleave}
            className="flex text-black mt-[9vw] sm:mt-[6vw] lg:mt-[4vw] cursor-pointer justify-center lg:justify-start transition-colors ease-in-out duration-200 hover:text-black  font-bold tracking-wider"
          >
            <Link href={"/start"}>
              <span className="p-2 px-8 border text-black hover:text-black hover:border-[#F0C808] hover:bg-[#F0C808] border-black rounded-full">
                START A PROJECT
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
