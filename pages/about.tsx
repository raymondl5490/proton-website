import Head from "next/head";
import AboutUs from "@/components/about/AboutUs";
import OurPeople from "@/components/about/OurPeople";

export const About = () => {
  return (
    <main>
      <Head>
        <title>About ProtonMail</title>
        <meta
          name="description"
          content="We're building encrypted email that protects privacy. Meet our team and learn more about our mission to provide free secure email to all."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutUs />
      <OurPeople />
    </main>
  );
};
export default About;
