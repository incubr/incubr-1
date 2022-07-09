import React from "react";

export const onmouseleave = () => {
  const customCursor = document.querySelector(".cursor");
  customCursor.style.width = "2.5rem";
  customCursor.style.height = "2.5rem";
  customCursor.classList.replace("bg-white", "bg-black");
  customCursor.classList.replace("bg-opacity-100", "bg-opacity-25");
  customCursor.innerHTML = "";
};

export default ({ children }) => {
  const container = React.useRef();

  React.useEffect(() => {
    const customCursor = document.querySelector(".cursor");
    const onMouseMove = (e) => {
      customCursor.classList.replace("hidden", "flex");
      customCursor.style.top = `${e.pageY}px`;
      customCursor.style.left = `${e.clientX}px`;
    };
    const onMouseLeave = () => {
      customCursor.classList.add("hidden");
    };
    const onMouseEnter = () => {
      customCursor.classList.remove("hidden");
    };
    const onScroll = () => {
      customCursor.classList.replace("flex", "hidden");
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={container} className="w-full">
      <div
        style={{
          transition: "width 0.8s, height 0.8s",
        }}
        className="cursor w-10 h-10 flex flex-col justify-center items-center rounded-full pointer-events-none filter backdrop-filter backdrop-invert bg-black bg-opacity-25 absolute z-[70] -translate-x-1/2 -translate-y-1/2"
      ></div>
      {children}
    </div>
  );
};
