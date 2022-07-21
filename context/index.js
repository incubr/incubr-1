import React from "react";
import gsap from "gsap";

export const Store = React.createContext();

export const Provider = ({ children }) => {
  const [height, setHeight] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const [canShow, setCanShow] = React.useState(false);

  React.useEffect(() => {
    const sleep = (milliseconds) => {
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };
    const doLoading = async () => {
      for (let i = 0; i <= 100; i++) {
        await sleep(20);
        setSeconds(i);
        if (i === 100) {
          gsap.to(".loading-animation", {
            duration: 1,
            position: "absolute",
            opacity: 0,
            ease: "power3.out",
            zIndex: -1,
          });
          setTimeout(() => {
            gsap.to(".loading-animation", {
              delay: 1,
              width: "0",
              translateX: "-100%",
            });
          }, 2000);
          setTimeout(() => {
            setCanShow(true);
          }, 3000);
        }
      }
    };
    if (seconds < 100) {
      doLoading();
    }
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setHeight("100vh");
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Store.Provider value={{ height, seconds, canShow }}>
      {children}
    </Store.Provider>
  );
};
