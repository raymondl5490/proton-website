import type { ArticleProperties } from "@/models/BlogArticle";

export const Featured: ArticleProperties[] = [
  {
    link: "/blog/ban-surveillance-advertising/",
    title: "It is time to ban surveillance-based advertising...",
    excerpt:
      "Recently, the Norwegian Consumer Council published a report calling for a ban on surveillance-based ads. In solidarity, Proton joined the other undersigned organizations in sending the followin...",
    image: {
      path: "/blog/2021-07-pm-blog-surveillance-based-advertising-768x384.png",
      dimensions: {
        width: 768,
        height: 384,
      },
    },
    meta: {
      date: 1625616000,
      comments: {
        commentsCount: 10,
      },
    },
  },
];

export default Featured;
