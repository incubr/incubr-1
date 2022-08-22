import React from "react";

export default function Description({ text }) {
  return (
    <div className="flex font-[PPNeueMontreal] flex-col items-center tracking-widest text-xl text-center px-6 my-8 lg:my-0 lg:leading-[1.9vw] lg:text-[1.3vw]">
      {text.split("\n").map((line, index) => (
        <p key={line + index}>{line}</p>
      ))}
    </div>
  );
}
