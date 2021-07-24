import type { TestimonialProperties } from "@/types/Testimonials";

export const Testimonials: TestimonialProperties[] = [
  {
    author: "Wall Street Journal",
    quote:
      "ProtonMail hosts its servers in Switzerland... so all user data is protected by strict Swiss privacy laws.",
    link: "https://blogs.wsj.com/digits/2014/08/14/is-encrypted-messaging-entering-the-mainstream/",
  },
  {
    author: "Forbes",
    quote:
      "An alternative to the ad-based revenue model of free services like Gmail which actively scan your emails to deliver relevant ads to you online",
    link: "https://www.forbes.com/sites/hollieslade/2014/05/19/the-only-email-system-the-nsa-cant-access",
  },
  {
    author: "New York Times",
    quote: "ProtonMail, a respected secure-email start-up based in Switzerland",
    link: "https://www.nytimes.com/2017/03/31/opinion/sunday/trump-is-president-now-encrypt-your-email.html",
  },
  {
    author: "Huffington Post",
    quote:
      "...[ProtonMail's] security measures are intense: end-to-end encryption and user authentication protocols so rigorous even the creators can't read user emails.",
    link: "https://www.huffingtonpost.com/2014/05/20/protonmail-privacy-email_n_5352530.html",
  },
];

export default Testimonials;
