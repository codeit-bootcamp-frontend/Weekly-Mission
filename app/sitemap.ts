import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://weekly-mission-git-henry-react-codeit-bootcamp.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://weekly-mission-git-henry-react-codeit-bootcamp.vercel.app/shared",
      lastModified: new Date(),
    },
    {
      url: "https://weekly-mission-git-henry-react-codeit-bootcamp.vercel.app/folder",
      lastModified: new Date(),
    },
  ];
}
