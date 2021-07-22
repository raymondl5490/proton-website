import Head from "next/head";
import AboutUs from "@/components/about/AboutUs";
import OurPeople from "@/components/about/OurPeople";
import Banner from "@/components/about/Banner";
import GetAnAccount from "@/components/home/GetAnAccount";
import OurStory from "@/components/about/OurStory";

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
      <Banner />
      <OurStory />
      <GetAnAccount
        headerText="Get your secure email account"
        buttonText="Create Account"
        href="/signup"
      />
    </main>
  );
};
export default About;
