import "../styles/globals.css";
import { Provider } from "../context";
import CursorProvider from "../src/custom-cursor";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <CursorProvider>
        <Component {...pageProps} />
      </CursorProvider>
    </Provider>
  );
}

export default MyApp;
