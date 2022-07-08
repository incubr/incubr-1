import React from "react";

export default function HeadingText({text}) {
  return (
    <div className="flex px-5 py-2 text-[1.5vw] font-[PPNeueMontreal] border border-black rounded-full tracking-wider">
      <h1 className="uppercase">{text}</h1>
    </div>
  );
}
