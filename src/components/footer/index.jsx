import Image from "next/image";
import React from "react";
import Logo from "@/assets/INCUBR (1).svg";
import DarkLogo from "@/assets/dark.svg";
import Link from "next/link";
import WhatsApp from "@/assets/whitewhatsapp.svg";
import Instagram from "@/assets/whiteinsta.svg";
import LinkedIn from "@/assets/whitelinkedin.svg";
import WhatsAppLight from "@/assets/whatsapp.svg";
import InstagramLight from "@/assets/instagram.svg";
import LinkedInLight from "@/assets/linkedin.svg";
import moment from "moment";
import {navigation_link} from "@/data/link";

export default function Footer({isDark=false}) {
  return (
    <div
      className={`w-full ${isDark? "bg-[#1F1D1D]":"bg-[#D9D9D926] bg-opacity-75"
        } flex flex-col items-center`}
    >
      <div className="flex w-full h-[26vh] justify-center bg-[#D9D9D926] bg-opacity-75">
        <div className="flex w-[95%] sm:flex-row flex-col border-b-2 justify-around">
          <div className="flex flex-col font-[Arial] justify-center px-16 w-full">
            <span className="flex font-bold text-[4.2vw] sm:text-[3.2vw] md:text-[3vw] lg:text-[2vw] my-5 sm:my-0">Our Newsletter</span>
            <span className="flex lg:text-[1.5vw]">Lorem Ipsum is simply dummy text of.</span>
          </div>
          <div className="flex w-full justify-center items-center">
            <input type="email" placeholder="Your email" className="border border-white outline-none flex p-[1.2vw] sm:w-[60%] w-[48%] lg:text-[1.2vw]" />
            <span className="bg-black text-white p-[1vw] items-center flex w-[20%] sm:w-[25%] justify-center text-[4vw] sm:text-[2vw] lg:text-[1.7vw] font-[PPNeueMontreal] font-normal">Subscribe</span>
          </div>
        </div>
      </div>
      <div
        className={`w-full ${isDark? "bg-[#1F1D1D]":"bg-[#D9D9D926] bg-opacity-75"
          } flex justify-center pb-[2vw] `}
      >
        <footer
          className={` px-[6vw] py-[5vw] ${isDark? "border-white":"border-black"
            } space-y-6 sm:space-y-[10vw] rounded-2xl lg:space-y-[2vw] w-[90%] lg:w-[95%] flex flex-col lg:flex-row items-center justify-center`}
        >
          <div className="flex flex-col lg:flex-row space-y-[5vw] lg:space-y-0">
            <div className="flex flex-col space-y-6 flex-1  sm:space-y-[10vw] lg:space-y-[3vw] justify-start items-start">

              {isDark? (
                <svg
                  width="200"
                  height="40"
                  viewBox="0 0 147 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.14703 0.559999L5.66703 5.12V24.72H4.70703L0.187031 20.2H1.14703V0.559999ZM30.2489 0.559999L34.8089 5.12V24.72H33.8489L29.2889 20.16H30.2489V0.559999ZM15.0089 2.16L19.5689 7.92V24.72H18.6089L14.0489 20.16H15.0089V2.16ZM29.2889 17.4V18.6L15.0089 0.559999C16.4756 1.81333 17.8356 3.2 19.0889 4.72C20.3689 6.21333 21.6089 7.70667 22.8089 9.2L29.2889 17.4ZM51.2717 20C52.9784 20 54.5917 19.5867 56.1117 18.76C57.6317 17.9067 58.8184 16.7333 59.6717 15.24L64.1917 19.8C63.3384 21.2933 62.1651 22.4533 60.6717 23.28C59.1784 24.1067 57.5784 24.52 55.8717 24.52C54.5651 24.52 53.3917 24.3067 52.3517 23.88C51.3384 23.4533 50.3917 22.8933 49.5117 22.2C48.6317 21.5067 47.7917 20.7333 46.9917 19.88C46.1917 19.0267 45.3651 18.1733 44.5117 17.32C45.4184 18.1733 46.4584 18.84 47.6317 19.32C48.8051 19.7733 50.0184 20 51.2717 20ZM47.7117 18.28C46.1117 17.56 44.8317 16.48 43.8717 15.04C42.9117 13.5733 42.4317 11.96 42.4317 10.2C42.4317 9 42.6584 7.86667 43.1117 6.8C43.5917 5.73333 44.2184 4.8 44.9917 4C45.7917 3.2 46.7117 2.57333 47.7517 2.12C48.8184 1.64 49.9517 1.4 51.1517 1.4C52.6184 1.4 53.9917 1.73333 55.2717 2.4C56.5784 3.06667 57.6584 3.98667 58.5117 5.16H59.6717C59.4584 4.84 59.2451 4.53333 59.0317 4.24C58.8184 3.92 58.5784 3.62666 58.3117 3.36C59.3251 4.37333 60.3651 5.38667 61.4317 6.4C62.4984 7.41333 63.4184 8.52 64.1917 9.72H63.0717C62.5117 9.13333 61.9784 8.61333 61.4717 8.16C60.9651 7.68 60.4317 7.28 59.8717 6.96C59.3384 6.61333 58.7517 6.36 58.1117 6.2C57.4717 6.01333 56.7251 5.92 55.8717 5.92C54.6451 5.92 53.4851 6.14667 52.3917 6.6C51.3251 7.05333 50.3784 7.68 49.5517 8.48C48.7517 9.28 48.1117 10.2267 47.6317 11.32C47.1784 12.3867 46.9517 13.5333 46.9517 14.76C46.9517 15.9333 47.2051 17.1067 47.7117 18.28ZM91.8108 5.12V16.96C91.8108 18.1333 91.5841 19.2 91.1308 20.16C90.7041 21.0933 90.1308 21.9067 89.4108 22.6C88.6908 23.2667 87.8508 23.7867 86.8908 24.16C85.9575 24.5333 84.9975 24.72 84.0108 24.72C83.0241 24.72 82.0375 24.5333 81.0508 24.16C80.0641 23.76 79.1708 23.1333 78.3708 22.28L74.0108 17.92C74.7041 18.64 75.5175 19.2 76.4508 19.6C77.3841 19.9733 78.3975 20.16 79.4908 20.16C80.5575 20.16 81.5575 19.96 82.4908 19.56C83.4508 19.1333 84.2775 18.5733 84.9708 17.88C85.6908 17.1867 86.2508 16.3733 86.6508 15.44C87.0775 14.48 87.2908 13.4667 87.2908 12.4V0.559999L91.8108 5.12ZM77.4908 18.92C76.7975 18.7067 76.1575 18.3867 75.5708 17.96C74.9841 17.5333 74.4775 17.04 74.0508 16.48C73.6241 15.92 73.2908 15.2933 73.0508 14.6C72.8108 13.88 72.6908 13.1467 72.6908 12.4V0.559999L77.2108 5.12V16.96C77.2108 17.6533 77.3041 18.3067 77.4908 18.92ZM105.01 6.08L100.45 1.56H109.73C110.93 1.56 111.877 1.96 112.57 2.76C113.29 3.56 113.65 4.53333 113.65 5.68C113.65 5.86667 113.637 6 113.61 6.08H105.01ZM105.01 14.96L100.45 10.4C101.677 10.4 102.944 10.4 104.25 10.4C105.584 10.3733 106.864 10.36 108.09 10.36H109.69C110.33 10.36 110.917 10.4933 111.45 10.76C112.01 11 112.477 11.3333 112.85 11.76C113.25 12.16 113.557 12.64 113.77 13.2C114.01 13.76 114.13 14.3467 114.13 14.96H105.01ZM119.65 19.56C119.65 20.2533 119.504 20.92 119.21 21.56C118.944 22.1733 118.57 22.72 118.09 23.2C117.61 23.6533 117.05 24.0267 116.41 24.32C115.797 24.5867 115.144 24.72 114.45 24.72H105.01L100.45 20.16H109.93C110.677 20.16 111.357 20.0267 111.97 19.76C112.61 19.4667 113.157 19.08 113.61 18.6C114.09 18.0933 114.45 17.52 114.69 16.88C114.957 16.2133 115.09 15.52 115.09 14.8C115.09 13.76 114.81 12.8 114.25 11.92C113.69 11.0133 112.944 10.3333 112.01 9.88C112.864 9.45333 113.504 8.85333 113.93 8.08C114.384 7.28 114.61 6.41333 114.61 5.48C114.61 4.94667 114.53 4.44 114.37 3.96C114.237 3.45333 114.01 2.98666 113.69 2.56L117.77 6.56C118.277 7.06667 118.637 7.62667 118.85 8.24C119.064 8.85333 119.17 9.50667 119.17 10.2C119.17 11.0533 118.957 11.84 118.53 12.56C118.104 13.28 117.53 13.8533 116.81 14.28C117.237 14.7067 117.624 15.1067 117.97 15.48C118.344 15.8267 118.65 16.2 118.89 16.6C119.13 16.9733 119.317 17.4 119.45 17.88C119.584 18.36 119.65 18.92 119.65 19.56ZM146.835 10.24C146.835 10.9067 146.715 11.5333 146.475 12.12C146.235 12.68 145.902 13.1733 145.475 13.6C145.049 14 144.542 14.32 143.955 14.56C143.395 14.8 142.782 14.92 142.115 14.92H140.995L146.835 24.72H145.715C144.942 23.9733 144.182 23.2267 143.435 22.48C142.689 21.7333 141.929 20.9733 141.155 20.2H142.315C141.355 18.5467 140.369 16.92 139.355 15.32C138.369 13.6933 137.395 12.0533 136.435 10.4H137.595C138.289 10.4 138.915 10.28 139.475 10.04C140.062 9.77333 140.569 9.42667 140.995 9C141.422 8.54667 141.742 8.02667 141.955 7.44C142.195 6.82667 142.315 6.18667 142.315 5.52C142.315 4.42667 141.995 3.45333 141.355 2.6L145.435 6.6C145.969 7.10667 146.329 7.66667 146.515 8.28C146.729 8.89333 146.835 9.54667 146.835 10.24ZM132.915 6.12L128.395 1.6H137.395C138.595 1.6 139.542 2 140.235 2.8C140.955 3.57333 141.315 4.53333 141.315 5.68C141.315 5.76 141.302 5.84 141.275 5.92C141.275 6 141.275 6.06667 141.275 6.12H132.915ZM128.475 10.44C129.355 10.44 130.035 10.44 130.515 10.44C131.022 10.4133 131.475 10.4 131.875 10.4C132.302 10.4 132.755 10.4 133.235 10.4C133.742 10.4 134.435 10.4 135.315 10.4C135.769 11.1733 136.222 11.9333 136.675 12.68C137.129 13.4267 137.582 14.1733 138.035 14.92L133.035 14.96V24.72H132.035L127.515 20.2H128.475V10.44Z"
                    fill="white"
                  />
                </svg>
              ):(
                <svg
                  width="200"
                  height="40"
                  viewBox="0 0 147 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.14703 0.559999L5.66703 5.12V24.72H4.70703L0.187031 20.2H1.14703V0.559999ZM30.2489 0.559999L34.8089 5.12V24.72H33.8489L29.2889 20.16H30.2489V0.559999ZM15.0089 2.16L19.5689 7.92V24.72H18.6089L14.0489 20.16H15.0089V2.16ZM29.2889 17.4V18.6L15.0089 0.559999C16.4756 1.81333 17.8356 3.2 19.0889 4.72C20.3689 6.21333 21.6089 7.70667 22.8089 9.2L29.2889 17.4ZM51.2717 20C52.9784 20 54.5917 19.5867 56.1117 18.76C57.6317 17.9067 58.8184 16.7333 59.6717 15.24L64.1917 19.8C63.3384 21.2933 62.1651 22.4533 60.6717 23.28C59.1784 24.1067 57.5784 24.52 55.8717 24.52C54.5651 24.52 53.3917 24.3067 52.3517 23.88C51.3384 23.4533 50.3917 22.8933 49.5117 22.2C48.6317 21.5067 47.7917 20.7333 46.9917 19.88C46.1917 19.0267 45.3651 18.1733 44.5117 17.32C45.4184 18.1733 46.4584 18.84 47.6317 19.32C48.8051 19.7733 50.0184 20 51.2717 20ZM47.7117 18.28C46.1117 17.56 44.8317 16.48 43.8717 15.04C42.9117 13.5733 42.4317 11.96 42.4317 10.2C42.4317 9 42.6584 7.86667 43.1117 6.8C43.5917 5.73333 44.2184 4.8 44.9917 4C45.7917 3.2 46.7117 2.57333 47.7517 2.12C48.8184 1.64 49.9517 1.4 51.1517 1.4C52.6184 1.4 53.9917 1.73333 55.2717 2.4C56.5784 3.06667 57.6584 3.98667 58.5117 5.16H59.6717C59.4584 4.84 59.2451 4.53333 59.0317 4.24C58.8184 3.92 58.5784 3.62666 58.3117 3.36C59.3251 4.37333 60.3651 5.38667 61.4317 6.4C62.4984 7.41333 63.4184 8.52 64.1917 9.72H63.0717C62.5117 9.13333 61.9784 8.61333 61.4717 8.16C60.9651 7.68 60.4317 7.28 59.8717 6.96C59.3384 6.61333 58.7517 6.36 58.1117 6.2C57.4717 6.01333 56.7251 5.92 55.8717 5.92C54.6451 5.92 53.4851 6.14667 52.3917 6.6C51.3251 7.05333 50.3784 7.68 49.5517 8.48C48.7517 9.28 48.1117 10.2267 47.6317 11.32C47.1784 12.3867 46.9517 13.5333 46.9517 14.76C46.9517 15.9333 47.2051 17.1067 47.7117 18.28ZM91.8108 5.12V16.96C91.8108 18.1333 91.5841 19.2 91.1308 20.16C90.7041 21.0933 90.1308 21.9067 89.4108 22.6C88.6908 23.2667 87.8508 23.7867 86.8908 24.16C85.9575 24.5333 84.9975 24.72 84.0108 24.72C83.0241 24.72 82.0375 24.5333 81.0508 24.16C80.0641 23.76 79.1708 23.1333 78.3708 22.28L74.0108 17.92C74.7041 18.64 75.5175 19.2 76.4508 19.6C77.3841 19.9733 78.3975 20.16 79.4908 20.16C80.5575 20.16 81.5575 19.96 82.4908 19.56C83.4508 19.1333 84.2775 18.5733 84.9708 17.88C85.6908 17.1867 86.2508 16.3733 86.6508 15.44C87.0775 14.48 87.2908 13.4667 87.2908 12.4V0.559999L91.8108 5.12ZM77.4908 18.92C76.7975 18.7067 76.1575 18.3867 75.5708 17.96C74.9841 17.5333 74.4775 17.04 74.0508 16.48C73.6241 15.92 73.2908 15.2933 73.0508 14.6C72.8108 13.88 72.6908 13.1467 72.6908 12.4V0.559999L77.2108 5.12V16.96C77.2108 17.6533 77.3041 18.3067 77.4908 18.92ZM105.01 6.08L100.45 1.56H109.73C110.93 1.56 111.877 1.96 112.57 2.76C113.29 3.56 113.65 4.53333 113.65 5.68C113.65 5.86667 113.637 6 113.61 6.08H105.01ZM105.01 14.96L100.45 10.4C101.677 10.4 102.944 10.4 104.25 10.4C105.584 10.3733 106.864 10.36 108.09 10.36H109.69C110.33 10.36 110.917 10.4933 111.45 10.76C112.01 11 112.477 11.3333 112.85 11.76C113.25 12.16 113.557 12.64 113.77 13.2C114.01 13.76 114.13 14.3467 114.13 14.96H105.01ZM119.65 19.56C119.65 20.2533 119.504 20.92 119.21 21.56C118.944 22.1733 118.57 22.72 118.09 23.2C117.61 23.6533 117.05 24.0267 116.41 24.32C115.797 24.5867 115.144 24.72 114.45 24.72H105.01L100.45 20.16H109.93C110.677 20.16 111.357 20.0267 111.97 19.76C112.61 19.4667 113.157 19.08 113.61 18.6C114.09 18.0933 114.45 17.52 114.69 16.88C114.957 16.2133 115.09 15.52 115.09 14.8C115.09 13.76 114.81 12.8 114.25 11.92C113.69 11.0133 112.944 10.3333 112.01 9.88C112.864 9.45333 113.504 8.85333 113.93 8.08C114.384 7.28 114.61 6.41333 114.61 5.48C114.61 4.94667 114.53 4.44 114.37 3.96C114.237 3.45333 114.01 2.98666 113.69 2.56L117.77 6.56C118.277 7.06667 118.637 7.62667 118.85 8.24C119.064 8.85333 119.17 9.50667 119.17 10.2C119.17 11.0533 118.957 11.84 118.53 12.56C118.104 13.28 117.53 13.8533 116.81 14.28C117.237 14.7067 117.624 15.1067 117.97 15.48C118.344 15.8267 118.65 16.2 118.89 16.6C119.13 16.9733 119.317 17.4 119.45 17.88C119.584 18.36 119.65 18.92 119.65 19.56ZM146.835 10.24C146.835 10.9067 146.715 11.5333 146.475 12.12C146.235 12.68 145.902 13.1733 145.475 13.6C145.049 14 144.542 14.32 143.955 14.56C143.395 14.8 142.782 14.92 142.115 14.92H140.995L146.835 24.72H145.715C144.942 23.9733 144.182 23.2267 143.435 22.48C142.689 21.7333 141.929 20.9733 141.155 20.2H142.315C141.355 18.5467 140.369 16.92 139.355 15.32C138.369 13.6933 137.395 12.0533 136.435 10.4H137.595C138.289 10.4 138.915 10.28 139.475 10.04C140.062 9.77333 140.569 9.42667 140.995 9C141.422 8.54667 141.742 8.02667 141.955 7.44C142.195 6.82667 142.315 6.18667 142.315 5.52C142.315 4.42667 141.995 3.45333 141.355 2.6L145.435 6.6C145.969 7.10667 146.329 7.66667 146.515 8.28C146.729 8.89333 146.835 9.54667 146.835 10.24ZM132.915 6.12L128.395 1.6H137.395C138.595 1.6 139.542 2 140.235 2.8C140.955 3.57333 141.315 4.53333 141.315 5.68C141.315 5.76 141.302 5.84 141.275 5.92C141.275 6 141.275 6.06667 141.275 6.12H132.915ZM128.475 10.44C129.355 10.44 130.035 10.44 130.515 10.44C131.022 10.4133 131.475 10.4 131.875 10.4C132.302 10.4 132.755 10.4 133.235 10.4C133.742 10.4 134.435 10.4 135.315 10.4C135.769 11.1733 136.222 11.9333 136.675 12.68C137.129 13.4267 137.582 14.1733 138.035 14.92L133.035 14.96V24.72H132.035L127.515 20.2H128.475V10.44Z"
                    fill="black"
                  />
                </svg>
              )}
              <div
                className={`w-full text-sm ${isDark? "text-[#FDFDFD]":"text-[#1F1D1D]"
                  } tracking-wider text-[4.5vw] sm:text-[2.5vw] sm:leading-[3.5vw] leading-[6vw] lg:text-[1.1vw] lg:leading-[1.8vw]  `}
              >
                We are a new-age brand incubator that specializes in integrated
                digital solutions- website, app, marketing, UX/UI, and
                technology. We engineer, design, and help you scale your
                products to reach your target group. Since the beginning, we've
                given entrepreneurs the tools and direction they need to
                transform their great ideas into successful businesses,
                assisting them in taking their businesses to the next level.
              </div>
            </div>
            <div
              className={`hidden lg:flex ${isDark? "text-[#FDFDFD]":"text-[#1F1D1D]"
                }  lg:flex-1 flex-col  lg:space-y-[3vw]`}
            >
              <Image
                src={isDark? DarkLogo:Logo}
                className="hidden lg:flex opacity-0"
              />
              <div className="flex ">
                <div className="flex flex-[3] items-center flex-col">
                  <div className="button flex space-y-2 font-[600] lg:space-y-[1.5vw] flex-col text-xl cursor-pointer font-[PPNeueMontreal] tracking-wider lg:text-[1.5vw]">
                    {navigation_link.map((item, index) => (
                      <Link key={"naviga"+index} href={item.link}>
                        <span className="px-[1.8vw] sm:px-0">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex flex-1 "></div>
              </div>
            </div>
            <div className="flex flex-col space-y-10 lg:justify-between justify-center items-start ">
              <div className="">
                <Link href={"/start-a-project"}>
                  <button
                    className={`button transition-colors w-auto lg:w-[22vw] duration-200 ease-in-out hover:shadow-md hover:bg-[#F0C808] hover:text-black font-[PPNeueMontreal] p-3 sm:p-5 rounded-full  text-2xl lg:text-[2.2vw] px-8 ${isDark
                      ? "text-[#1F1D1D] bg-[#FDFDFD]"
                      :"text-[#FDFDFD] bg-[#1F1D1D]"
                      }`}
                  >
                    START A PROJECT
                  </button>
                </Link>
                <div
                  className={`${isDark? "text-[#FDFDFD]":"text-[#1F1D1D]"
                    } mt-5 lg:mt-[2vw] lg:ml-[0.5vw] font-[PPNeueMontreal] text-center lg:text-start tracking-widest text-md lg:text-[1.2vw] font-[400]`}
                >
                  We would love to help you.
                </div>
              </div>
              <div className="items-start flex flex-col">
                <div className="button flex space-x-3 justify-start">
                  <Link href={"https://www.linkedin.com/company/incubr/about/"}>
                    <button
                      className={`w-14 ${isDark
                        ? "text-[#1F1D1D] bg-[#FDFDFD]"
                        :"text-[#FDFDFD] bg-[#1F1D1D]"
                        } h-14 flex justify-center items-center hover:shadow-md hover:bg-[#F0C808] hover:text-black  rounded-full`}
                    >
                      <Image src={isDark? LinkedInLight:LinkedIn} />
                    </button>
                  </Link>
                  <Link href={"https://www.instagram.com/incubr.tech/"}>
                    <button
                      className={`w-14 ${isDark
                        ? "text-[#1F1D1D] bg-[#FDFDFD]"
                        :"text-[#FDFDFD] bg-[#1F1D1D]"
                        } h-14 flex justify-center items-center hover:shadow-md hover:bg-[#F0C808] hover:text-black  rounded-full`}
                    >
                      <Image src={isDark? InstagramLight:Instagram} />
                    </button>
                  </Link>
                  <Link
                    href={
                      "whatsapp://send?text=Hello World!&phone=+919999988493"
                    }
                  >
                    <button
                      className={`w-14 ${isDark
                        ? "text-[#1F1D1D] bg-[#FDFDFD]"
                        :"text-[#FDFDFD] bg-[#1F1D1D]"
                        } h-14 flex justify-center items-center hover:shadow-md hover:bg-[#F0C808] hover:text-black  rounded-full`}
                    >
                      <Image src={isDark? WhatsAppLight:WhatsApp} />
                    </button>
                  </Link>
                </div>

                {/* <div
                  className={`${
                    isDark ? "text-[#FDFDFD]" : "text-[#1F1D1D]"
                  } mt-5 lg:mt-[3vw] font-[PPNeueMontreal] text-center lg:text-start tracking-widest text-md lg:text-[1.2vw] font-[400]`}
                >
                  We would love to help you.
                  <br /> with your next project.
                </div> */}

              </div>
            </div>
            <div className="flex lg:hidden ">
              <div className="flex flex-[3] items-center">
                <div
                  className={`${isDark? "text-white":"text-black"
                    } button flex  font-[600] text-md cursor-pointer font-[PPNeueMontreal] tracking-wider lg:text-[1.5vw] opacity-50`}
                >
                  {navigation_link.slice(0, 4).map((item, index) => (
                    <Link key={"naviga"+index} href={item.link}>
                      <span className="px-[1.8vw]">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* <div
        className={`${isDark
          ? "text-[#e9e9e9] bg-[#1F1D1D]"
          :"text-[#444444] bg-[#fff] "
          } tracking-wider py-4 font-[PPNeueMontreal] w-full flex justify-center text-xl mt-[2vw] lg:text-[1.5vw]`}
      >
        <span>&copy;INCUBR {moment().year()}</span>
      </div> */}
    </div>
  );
}
