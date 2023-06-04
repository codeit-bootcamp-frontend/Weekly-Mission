import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap:
      "https://weekly-mission-git-henry-react-week11-codeit-bootcamp.vercel.app/sitemap.xml",
  };
}
