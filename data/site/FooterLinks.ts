import type { FooterLinkCollectionType } from "@/types/FooterLinkCollection";

export const FooterLinks: FooterLinkCollectionType[] = [
  {
    title: "ProtonMail",
    links: [
      {
        title: "Pricing",
        location: "/pricing",
        description: "Additional information about ProtonMail Subscription Plans",
      },
      {
        title: "Security",
        location: "/security-details",
        description: "Insights about our security standards and protocols.",
      },
      {
        title: "Shop",
        location: "https://shop.protonmail.com/",
        description: "Our offical shop with Proton merchandise.",
      },
      {
        title: "Press/Media Kit",
        location: "/press",
        description: "Images, logos and other media files you could use to show ProtonMail.",
      },
      {
        title: "Onion Site",
        location: "https://protonmail.com/tor",
        description: "Secure access to your ProtonMail Mailbox over Tor.",
      },
      {
        title: "ProtonMail Status",
        location: "https://protonstatus.com/",
      },
    ],
  },
  {
    title: "Features",
    links: [
      {
        title: "iOS App",
        location: "https://itunes.apple.com/us/app/protonmail-encrypted-email/id979659905",
      },
      {
        title: "Android App",
        location: "https://play.google.com/store/apps/details?id=ch.protonmail.android",
      },
      {
        title: "IMAP/SMTP Bridge",
        location: "/bridge",
      },
      {
        title: "ProtonVPN",
        location: "https://protonvpn.com/",
      },
      {
        title: "Business Email",
        location: "/business",
      },
      {
        title: "Encrypted Contacts",
        location: "/support/knowledge-base/encrypted-contacts",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        title: "Imprint",
        location: "/imprint",
      },
      {
        title: "Privacy Policy",
        location: "/privacy-policy",
      },
      {
        title: "Terms & Conditions",
        location: "https://shop.protonmail.com/",
      },
      {
        title: "Transparency Report",
        location: "/press",
      },
      {
        title: "Report Abuse",
        location: "https://protonmail.com/tor",
      },
      {
        title: "GDPR Compliance",
        location: "https://protonstatus.com/",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        title: "Blog",
        location: "/blog",
      },
      {
        title: "Team",
        location: "/about",
      },
      {
        title: "Careers",
        location: "https://careers.protonmail.com/",
      },
      {
        title: "Support",
        location: "/support",
      },
      {
        title: "Donate",
        location: "/donate",
      },
      {
        title: "Open Source",
        location: "/blog/openpgpjs-3-release",
      },
    ],
  },
  {
    title: "Social",
    links: [
      {
        icon: ["fab", "facebook-f"],
        title: "Facebook",
        location: "https://facebook.com/ProtonMail",
      },
      {
        icon: ["fab", "twitter"],
        title: "Twitter",
        location: "https://twitter.com/ProtonMail",
      },
      {
        icon: ["fab", "reddit-alien"],
        title: "Reddit",
        location: "https://www.reddit.com/r/ProtonMail/",
      },
      {
        icon: ["fab", "instagram"],
        title: "Instagram",
        location: "https://www.instagram.com/protonmail/",
      },
      {
        icon: ["fab", "mastodon"],
        title: "Mastodon",
        location: "https://mastodon.social/@protonmail",
      },
      {
        icon: ["fas", "comments"],
        title: "Feedback Forum",
        location: "https://protonmail.uservoice.com/",
      },
    ],
  },
];

export default FooterLinks;
