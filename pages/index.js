import React from "react";
import Footer from "../src/components/footer";
import About from "../src/components/home/about";
import Landing from "../src/components/home/landing";
import Testimonies from "../src/components/home/testimonies";
import OurWork from "../src/components/home/work";

export default function Home() {
  return (
    <div className="w-full scroll-smooth">
      <Landing />
      <About />
      <OurWork />
      <Testimonies />
      <Footer />
    </div>
  );
};
