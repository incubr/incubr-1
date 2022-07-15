import "../styles/globals.css";
import { Provider } from "../context";
import CursorProvider from "../src/custom-cursor";
import React from "react";
import  {
  afterAnimationStart,
  beforeAnimationStart,
} from "@/src/animation/loading";
import gsap from "gsap";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  React.useEffect(() => {
    router.events.on("routeChangeStart", () => {
      beforeAnimationStart();
    });
    router.events.on("routeChangeComplete", () => {
      // afterAnimationStart();
      const tl = gsap.timeline();
      setTimeout(() => {
        tl.to("#mainAnimation", {
          duration: 0.3,
          top: 0,
          height: 0,
          opacity: 0,
          ease: "power3.out",
        }).to("#mainAnimation", {
          bottom: 0,
        });
      }, 2000);
    });
    router.events.on("routeChangeError", () => {
      // afterAnimationStart();
      const tl = gsap.timeline();
      setTimeout(() => {
        tl.to("#mainAnimation", {
          duration: 0.3,
          top: 0,
          height: 0,
          opacity: 0,
          ease: "power3.out",
        });
        tl.to("#mainAnimation", {
          bottom: 0,
        });
      }, 2000)
    });
  }, [router]);

  return (
    <Provider>
      <div
        id="mainAnimation"
        className="fixed card-wrapper bottom-0 left-0 flex flex-col w-full h-0 pointer-events-none overflow-y-auto z-[100]"
      >
        <marquee
          direction="up"
          scrollamount="110"
          className="w-full card-wrapper h-full flex flex-col bg-[#1F1D1D] "
        >
          {
            `this is a test`.split("").map((_, i) =>
              ["#1D1D1D", "#1A70C0", "#FDFDFD", "#332F2F", "#F0C808"].map(
                (item, index) => (
                  <div
                    key={index + item + "dashboard"}
                    style={{
                      background: item,
                    }}
                    className="card w-full h-60 flex-none "
                  />
                )
              )
            )
          }
        </marquee>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        pauseOnFocusLoss={false}
        draggablePercent={60}
        closeOnClick={true}
        draggable
      />
      <CursorProvider>
        <Component {...pageProps} />
      </CursorProvider>
    </Provider>
  );
}

export default MyApp;
