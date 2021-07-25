import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Navbar from "@/components/site/Navbar";
import Sidebar from "@/components/site/Sidebar";
import { NavLinks } from "@/data/site/NavLinks";
import Footer from "@/components/site/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar links={NavLinks} opacity={useRouter().route === "/" ? "auto" : "opaque"} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
