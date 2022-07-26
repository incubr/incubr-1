import React from "react";

export const onmouseleave = () => {
  const customCursor = document.querySelector(".cursor");
  customCursor.style.width = "2.5rem";
  customCursor.style.height = "2.5rem";
  customCursor.classList.replace("bg-white", "bg-black");
  customCursor.classList.replace("bg-opacity-100", "bg-opacity-25");
  customCursor.innerHTML = "";
};

export const buttonMouseEnter = () => {
  const customCursor = document.querySelector(".cursor");
  customCursor.style.width = "0.5rem";
  customCursor.style.height = "0.5rem";
  customCursor.classList.replace("bg-white", "bg-black");
  customCursor.classList.replace("bg-opacity-100", "bg-opacity-25");
  customCursor.innerHTML = "";
};

export function is_touch_enabled() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

export default ({ children }) => {
  const container = React.useRef();
  const [isTouchEnabled, setIsTouchEnabled] = React.useState(false)

  React.useEffect(() => {
    const customCursor = document.querySelector(".cursor");
    const onMouseMove = (e) => {
      customCursor.classList.replace("hidden", "flex");
      customCursor.style.top = `${e.clientY}px`;
      customCursor.style.left = `${e.clientX}px`;
    };
    setIsTouchEnabled(is_touch_enabled())
    const onMouseLeave = () => {
      customCursor.classList.add("hidden");
    };
    const onMouseEnter = () => {
      customCursor.classList.remove("hidden");
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseenter", onMouseEnter);
    document.querySelectorAll(".button").forEach((a) => {
      a.addEventListener("mouseenter", buttonMouseEnter);
      a.addEventListener("mouseleave", onmouseleave);
    });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseenter", onMouseEnter);
      document.querySelectorAll(".button").forEach((a) => {
        a.removeEventListener("mouseenter", buttonMouseEnter);
        a.removeEventListener("mouseleave", onmouseleave);
      });
    };
  }, []);

  return (
    <div ref={container} className="w-full">
      <div
        className={` w-full h-screen ${
          isTouchEnabled ? "hidden" : "block"
        } fixed z-[1000] pointer-events-none`}
      >
        <div
          style={{
            transition: "width 0.8s, height 0.8s",
          }}
          className={`cursor w-10 h-10 ${
            isTouchEnabled ? "hidden" : "flex"
          } flex-col justify-center items-center rounded-full pointer-events-none filter backdrop-filter backdrop-invert bg-black bg-opacity-25 absolute z-[1000] -translate-x-1/2 -translate-y-1/2`}
        ></div>
      </div>
      {children}
    </div>
  );
};
