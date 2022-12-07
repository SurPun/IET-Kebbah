import "../styles/globals.css";
import Screensize from "../components/Screensize";

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
