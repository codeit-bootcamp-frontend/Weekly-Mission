import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://weekly-mission-git-eva-react-codeit-bootcamp.vercel.app",
      lastModified: new Date(),
    },
  ];
}
