interface linkItem {
  link?: string;
  path: string;

  social?: string;
}
interface socialLinkItem {
  path: string;
  icon: string;
  social: string;
}

export const aboutLinks: linkItem[] = [
  {
    link: "Home",
    path: "/",
  },
  {
    link: "Portfolio",
    path: "/portfolio",
  },

  {
    link: "Network",
    path: "/network",
  },
];

export const communityLinks: linkItem[] = [
  {
    link: "Blog",
    path: "/blog",
  },
  {
    link: "Events & Media",
    path: "/events-media",
  },
  {
    link: "Contact Us",
    path: "/contact",
  },
  // {
  //   link: "Author Profile",
  //   path: "/author-profile",
  // },
];
export const socialLinks: socialLinkItem[] = [
  {
    icon: "/images/social/linkedin.png",
    social: "Linkedin",
    path: "https://www.linkedin.com/company/lets-turbostart/",
  },
  {
    icon: "/images/social/youtube.png",
    social: "Youtube ",
    path: "https://www.youtube.com/@turbostart",
  },
  {
    icon: "/images/social/instagram.png",
    social: "Instagram ",
    path: "https://www.instagram.com/letsturbostart/",
  },
];
