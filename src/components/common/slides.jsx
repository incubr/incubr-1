import React from "react";
import { Store } from "../../../context";

export default function Slides() {
  const { height } = React.useContext(Store);
  return (
    <section
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2022/07/05/10/54/ocean-7302776__480.jpg")`,
        height: height + (5 * height / 100),
      }}
      className="flex-none mr-4 font-[PPNeueMontreal] w-[90%] bg-cover "
    >
      <div className="flex text-white tracking-widest flex-1 h-full bg-gradient-to-t from-black to-transparent w-full p-10 2xl:p-16">
        <div className="flex flex-1 flex-col justify-end">
          <h1 className="font-bold text-[1.5vw]">. 01 -05</h1>
          <h1 className="font-bold tracking-widest text-[4.3vw]">
            Growth School
          </h1>
          <span className=" font-bold text-[1.3vw]">COLLABORATORS</span>
          <span className="font-bold mt-5">Collaborator 1</span>
          <span className="font-bold ">Collaborator 1</span>
          <span className="font-bold ">Collaborator 1</span>
        </div>
        <div className="flex flex-1 flex-col h-full items-end justify-end">
          <button className="flex-none w-[15vw] px-5 py-3 text-[1.2vw] font-bold font-[PPNeueMontreal] border border-white rounded-full tracking-wider">
            VIEW CASE STUDY
          </button>
        </div>
      </div>
    </section>
  );
}
