import Image from "next/image";
import React from "react";
import Logo from "../../../assets/footerlogo.svg";
import Description from "../common/Description";
import WhatsApp from "../../../assets/whitewhatsapp.svg";
import Instagram from "../../../assets/whiteinsta.svg";
import LinkedIn from "../../../assets/whitelinkedin.svg";
import moment from "moment";

export default function Footer() {
  return (
    <footer className="h-screen space-y-16 w-full flex flex-col items-center justify-center">
      <Image src={Logo} />
      <div className="">
        <Description
          text={"We would love to help you with your next project."}
        />
      </div>
      <button className="button transition-colors duration-200 ease-in-out hover:shadow-md hover:bg-[#F0C808] hover:text-black font-[PPNeueMontreal] p-3 rounded-full text-[3vw] px-8 bg-[#110A0A] text-white">
        START A PROJECT
      </button>
      <div className="button flex space-x-3">
        <button className="w-14 h-14 flex justify-center items-center hover:shadow-md hover:bg-[#F0C808] hover:text-black bg-[#110A0A] rounded-full">
          <Image src={LinkedIn} />
        </button>
        <button className="w-14 h-14 flex justify-center items-center hover:shadow-md hover:bg-[#F0C808] hover:text-black bg-[#110A0A] rounded-full">
          <Image src={Instagram} />
        </button>
        <button className="w-14 h-14 flex justify-center items-center hover:shadow-md hover:bg-[#F0C808] hover:text-black bg-[#110A0A] rounded-full">
          <Image src={WhatsApp} />
        </button>
      </div>
      <div className="button flex divide-x-2 divide-gray-500 cursor-pointer font-[PPNeueMontreal] tracking-wider text-[1.7vw] text-black opacity-50">
        <span className="px-[1.8vw]">Home</span>
        <span className="px-[1.8vw]">Services</span>
        <span className="px-[1.8vw]">Work</span>
        <span className="px-[1.8vw]">Testimonies</span>
      </div>
      <div className=" text-black tracking-wider font-[PPNeueMontreal] opacity-50 text-[1.5vw]">
        <span>&copy; COPYRIGHT {moment().year()}</span>
      </div>
    </footer>
  );
}
