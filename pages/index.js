import React from "react";
import About from "../src/components/home/about";
import Landing from "../src/components/home/landing";

export default function Home() {

  return (
    <div className="w-full">
      <Landing />
      <About />
    </div>
  );
};
