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
import Meta from "@/src/components/meta";

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
      <Meta title="Incubr.com - Leading UI/UX and Web Development" />
      <div
        id="mainAnimation"
        className="fixed card-wrapper bottom-0 left-0 flex flex-col w-full h-0 pointer-events-none overflow-y-auto z-[100]"
      >
        {["#2E5894", "#627573", "#969252", "#C8AF30", "#FDCC0D"].map(
          (item, index) => (
            <div
              key={index + item + "dashboard"}
              style={{
                background: item,
              }}
              className="card w-full card-wrapper-20 h-20 sm:h-[20vw] lg:h-[10vw] shadow-inner flex-none "
            />
          )
        )}
        <marquee
          direction="up"
          scrollamount="130"
          loop={true}
          className="w-full absolute top-0 left-0 card-wrapper-01 h-full flex flex-col "
        >
          {`this is animation for page change`.split("").map((_) =>
            ["#2E5894", "#627573", "#969252", "#C8AF30", "#FDCC0D"].map(
              (item, index) => (
                <div
                  key={index + item + "dashboard"}
                  style={{
                    background: item,
                  }}
                  className="card w-full card-wrapper-20 h-20 sm:h-[20vw] lg:h-[10vw] shadow-inner flex-none "
                />
              )
            )
          )}
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
