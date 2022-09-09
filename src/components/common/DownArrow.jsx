import React from "react";

function DownArrow({ title, isDark = false }) {
  return (
    <div className="flex w-full lg:absolute h-[18vh] sm:h-[20vh] lg:h-auto bottom-10 justify-center">
      <div className="flex w-[85%] justify-center lg:justify-end">
        <div
          onClick={() => window.scrollTo(0, window.innerHeight)}
          className="button cursor-pointer sm:h-48 sm:w-48 lg:w-[12.5vw] 2xl:w-[10vw] 2xl:h-[10vw] lg:h-[12.5vw] flex flex-col items-center lg:justify-between"
        >
          <div
            className={`lg:w-[10vw] sm:h-36 sm:w-36 ${
              isDark ? "bg-[#F0C808]" : "border-black border"
            } w-[22vw] h-[22vw] lg:h-[10vw] 2xl:w-[8vw] 2xl:h-[8vw]  bg-transparent hover:bg-[#F0C808]  hover:border-transparent transition-colors duration-300 ease-in-out flex rounded-full justify-center items-center`}
          >
            <svg
              width="31"
              height="74"
              viewBox="0 0 31 74"
              fillRule="none"
              className="lg:block hidden"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.5634 72.9347C16.2563 73.3974 15.8414 73.6958 15.4101 73.7642C14.9788 73.8327 14.5664 73.6657 14.2636 73.2999L0.561567 56.748C0.258733 56.3822 0.0903052 55.8476 0.0933311 55.2618C0.096357 54.6759 0.270591 54.0869 0.577705 53.6242C0.884817 53.1616 1.29965 52.8632 1.73095 52.7947C2.16225 52.7262 2.57468 52.8932 2.87751 53.2591L13.8231 66.4812L14.1483 3.09009C14.1498 2.79965 14.1934 2.50537 14.2766 2.22405C14.3598 1.94273 14.481 1.67987 14.6333 1.45049C14.7855 1.22111 14.9659 1.0297 15.164 0.887187C15.3621 0.744673 15.5742 0.653846 15.788 0.619894C16.0018 0.585942 16.2133 0.60953 16.4102 0.689308C16.6072 0.769087 16.7859 0.903495 16.936 1.08486C17.0861 1.26622 17.2048 1.49099 17.2853 1.74633C17.3657 2.00166 17.4063 2.28257 17.4048 2.57301L17.0751 65.9649L28.1754 49.2422C28.4825 48.7795 28.8973 48.4811 29.3286 48.4126C29.7599 48.3441 30.1723 48.5112 30.4752 48.877C30.778 49.2428 30.9464 49.7775 30.9434 50.3633C30.9404 50.9491 30.7661 51.5381 30.459 52.0008L16.5634 72.9347Z"
                fill="#000"
              />
            </svg>
            <svg
              width="19"
              height="45"
              viewBox="0 0 19 45"
              fillRule="none"
              className="block lg:hidden"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.4456 43.5671C10.2643 43.8432 10.0192 44.0209 9.76423 44.0613C9.50926 44.1017 9.26528 44.0014 9.08597 43.7824L0.97272 33.8754C0.793406 33.6565 0.693447 33.3368 0.694834 32.9868C0.696219 32.6368 0.798837 32.2851 0.980111 32.009C1.16138 31.733 1.40647 31.5552 1.66144 31.5148C1.91642 31.4744 2.1604 31.5748 2.33971 31.7937L8.82084 39.7077L8.96946 1.83242C8.97014 1.65889 8.99572 1.48311 9.04473 1.31513C9.09374 1.14715 9.16522 0.990246 9.2551 0.853386C9.34497 0.716527 9.45147 0.602389 9.56852 0.517489C9.68557 0.432589 9.81088 0.378589 9.93729 0.358574C10.0637 0.338559 10.1887 0.35292 10.3053 0.400837C10.4218 0.448753 10.5275 0.529287 10.6164 0.637841C10.7053 0.746395 10.7756 0.880842 10.8234 1.03351C10.8711 1.18617 10.8953 1.35406 10.8946 1.5276L10.7433 39.4033L17.2953 29.4257C17.4766 29.1497 17.7216 28.9719 17.9766 28.9315C18.2316 28.8912 18.4756 28.9915 18.6549 29.2104C18.8342 29.4294 18.9342 29.7491 18.9328 30.0991C18.9314 30.4491 18.8288 30.8008 18.6475 31.0769L10.4456 43.5671Z"
                fill="#000"
              />
            </svg>
          </div>
          <h1
            className={`font-bold text-xl ${
              isDark ? "text-white" : " text-black"
            } mt-[2vw] lg:mt-0 lg:text-[1.6vw] font-[PPNeueMontreal] tracking-widest`}
          >
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}


const NewDownArrow = ({title, isDark = false }) => {
  return (
    <div className="flex w-full  absolute h-[8vh] sm:h-[10vh] lg:h-auto bottom-5 sm:bottom-10 justify-center">
      <div className="flex w-[85%] justify-end ">
        <div
          onClick={() => window.scrollTo(0, window.innerHeight)}
          className="button cursor-pointer sm:h-48 sm:w-48 lg:w-[12.5vw] 2xl:w-[10vw] 2xl:h-[10vw] lg:h-[12.5vw] flex flex-col items-end lg:justify-end"
        >
          <div
            className={`lg:w-[4vw] sm:h-16 sm:w-16 bg-[#FFA400] w-[15vw] h-[15vw] lg:h-[4vw] 2xl:w-[3vw] 2xl:h-[3vw] hover:bg-[#F0C808]  hover:border-transparent transition-colors duration-300 ease-in-out flex rounded-full justify-center items-center`}
          >
            <svg
              viewBox="0 0 22 12"
              className=" w-[5vw] sm:w-[3vw] lg:w-[1.4vw]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.7514 0.251753C21.8302 0.331354 21.8927 0.425917 21.9354 0.530025C21.978 0.634132 22 0.74574 22 0.858456C22 0.971171 21.978 1.08278 21.9354 1.18689C21.8927 1.29099 21.8302 1.38556 21.7514 1.46516L11.5988 11.7482C11.5202 11.828 11.4268 11.8914 11.324 11.9346C11.2213 11.9778 11.1111 12 10.9998 12C10.8885 12 10.7783 11.9778 10.6755 11.9346C10.5727 11.8914 10.4794 11.828 10.4008 11.7482L0.248117 1.46516C0.0892505 1.30425 -4.74711e-08 1.08601 -3.75243e-08 0.858455C-2.75774e-08 0.630897 0.0892505 0.41266 0.248117 0.251752C0.406984 0.0908448 0.622454 0.000447723 0.847124 0.000447733C1.0718 0.000447743 1.28726 0.0908448 1.44613 0.251752L10.9998 9.92985L20.5534 0.251753C20.632 0.171951 20.7254 0.108636 20.8282 0.0654361C20.931 0.0222361 21.0411 -4.19128e-08 21.1524 -3.70483e-08C21.2637 -3.21839e-08 21.3739 0.0222361 21.4767 0.0654361C21.5795 0.108636 21.6728 0.171951 21.7514 0.251753Z"
                fill={"#000"}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDownArrow