import React from "react";

export default function HeadingText({text}) {
  return (
    <div className="flex px-5 py-2 text-6xl mt-16 lg:mt-0 lg:text-[4vw] text-center font-[PPNeueMontreal] rounded-full tracking-wider">
      <h1 className="uppercase">{text}</h1>
    </div>
  );
}
