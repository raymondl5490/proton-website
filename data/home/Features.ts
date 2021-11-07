import type { FeatureProps } from "@/types/Features";

export const Features: FeatureProps[] = [
  {
    icon: "swiss",
    title: "Swiss Privacy",
    subtitle: "Data Security and Neutrality",
    description:
      "ProtonMail is incorporated in Switzerland and all our servers are located in Switzerland. This means all user data is protected by strict Swiss privacy laws.",
  },
  {
    icon: "e2ee",
    title: "End-to-End Encryption",
    subtitle: "Automatic Email Security",
    description:
      "We use end-to-end encryption and zero access encryption to secure emails. This means even we cannot decrypt and read your emails. As a result, your encrypted emails cannot be shared with third parties.",
  },
  {
    icon: "key",
    title: "Your data, your rules",
    subtitle: "Protect your privacy",
    description:
      'ProtonMail is an email provider/service that respects privacy and puts people (not advertisers) first. Your data belongs to you, and our encryption ensures that. We also provide an <a href="/tor" target="_blank">anonymous email</a> gateway.',
  },
  {
    icon: "free",
    title: "Open Source",
    subtitle: "Free Secure Email",
    description:
      'We believe email privacy should be available to all. That\'s why our code is open source and basic ProtonMail accounts are always free. You can support the project by <a href="https://protonmail.com/donate">donating</a> or <a href="https://protonmail.com/pricing">upgrading to a paid account</a>.',
  },
  {
    icon: "easy",
    title: "Easy to Use",
    subtitle: "Security without the hassle",
    description:
      "ProtonMail can be used on any device without software install. ProtonMail secure email accounts are fully compatible with other email providers. You can send and receive emails normally.",
  },
  {
    icon: "design",
    title: "Calendar & Drive",
    subtitle: "Security with Productivity",
    description:
      "Proton Calendar and Proton Drive extend privacy to your events and documents. Our secure email service is fully integrated with an encrypted calendar, enabling you to keep your events private as well.",
  },
];

export default Features;
