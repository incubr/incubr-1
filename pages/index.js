import React from "react";
import About from "../src/components/home/about";
import Landing from "../src/components/home/landing";
import Testimonies from "../src/components/home/testimonies";
import OurWork from "../src/components/home/work";

export default function Home() {
  return (
    <div className="w-full">
      <Landing />
      <About />
      <OurWork />
      <Testimonies />
    </div>
  );
};
