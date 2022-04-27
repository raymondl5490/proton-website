import { NavigationMenu } from "@/models/NavLinks";

export const NavLinks: NavigationMenu = [
  { text: "About", link: "/about" },
  { text: "Security", link: "/security-details" },
  { text: "Blog", link: "/blog" },
  { text: "Careers", link: "https://careers.protonmail.com" },
  { text: "Support", link: "/support" },
  {
    text: "Professional",
    children: [
      { text: "Individual", link: "/professional" },
      { text: "Business", link: "/business" },
    ],
  },
  { text: "VPN", link: "https://protonvpn.com" },
];
