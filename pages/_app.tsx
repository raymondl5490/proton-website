import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
