import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Hero from "../components/home/Hero";
import Map from "../components/home/Map";
import Features from "../components/home/Features";
import GetAnAccount from "../components/home/GetAnAccount";
import PhysicalSecurity from "../components/home/PhysicalSecurity";
import OurStory from "../components/home/OurStory";
import BasedInSwitzerland from "../components/home/BasedInSwitzerland";
import PartnersAndSponsors from "../components/home/PartnersAndSponsors";
import ContactInformation from "../components/home/ContactInformation";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <main className={styles.container}>
      <Head>
        <title>Secure email: ProtonMail is free encrypted email.</title>
        <meta name="description" content="Free encrypted mail available to everyone." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Features />
      <GetAnAccount
        href="/signup"
        headerText="Get your secure email account"
        buttonText="Create Account"
      />
      <PhysicalSecurity />
      <Testimonials />
      <OurStory />
      <BasedInSwitzerland />
      <PartnersAndSponsors />
      <Map />
      <ContactInformation />
    </main>
  );
}
