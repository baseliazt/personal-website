import { IConfig } from "next-sitemap";

const config: IConfig = {
  siteUrl: "https://personal-website-psi-hazel-83.vercel.app", // Replace with your actual site URL
  generateRobotsTxt: true, // Generate a robots.txt file
  sitemapSize: 5000, // Maximum number of URLs per sitemap file
  changefreq: "daily", // Default frequency of page updates
  priority: 0.7, // Default priority for pages
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};

export default config;
