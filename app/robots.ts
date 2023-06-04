import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap:
      "https://weekly-mission-git-fork-wooleejaan-henry-5968a4-codeit-bootcamp.vercel.app/sitemap.xml",
  };
}
