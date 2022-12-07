import Screensize from "../components/Screensize";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="max-md:hidden">
        <Component {...pageProps} />
      </div>

      <div className="lg:hidden md:hidden">
        <Screensize />
      </div>
    </>
  );
}

export default MyApp;

// Any screen less than 1024px in width will be blocked. -- 854px
