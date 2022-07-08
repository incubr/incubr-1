import React from "react";

export default function Description({ text }) {
  return (
    <div className="flex font-[PPNeueMontreal] flex-col items-center tracking-widest text-[1.5vw]">
      {text.split("\n").map((line, index) => (
        <p key={line + index}>{line}</p>
      ))}
    </div>
  );
}
