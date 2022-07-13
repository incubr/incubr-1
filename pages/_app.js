import "../styles/globals.css";
import { Provider } from "../context";
import CursorProvider from "../src/custom-cursor";
import React from "react";
import loading, {
  afterAnimationStart,
  beforeAnimationStart,
} from "@/src/animation/loading";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  React.useEffect(() => {
    router.events.on("routeChangeStart", () => {
      beforeAnimationStart();
      loading();
    });
    router.events.on("routeChangeComplete", () => {
      afterAnimationStart();
    });
    router.events.on("routeChangeError", () => {
      afterAnimationStart();
    });
  }, [router]);

  return (
    <Provider>
      {/* <div id="mainAnimation" className="fixed card-wrapper top-0 left-0 flex flex-col w-full h-0 overflow-y-auto z-[100]">
        <div className="w-full card-wrapper h-full flex flex-col  ">
          {`We are a new-age brand incubator that specializes in integrated
              digital solutions- website, app,`
            .split("")
            .map((_, i) =>
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
            )}
        </div>
      </div> */}
      <CursorProvider>
        <Component {...pageProps} />
      </CursorProvider>
    </Provider>
  );
}

export default MyApp;
