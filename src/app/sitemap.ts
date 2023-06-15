import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://weekly-mission-git-jer1s-react-codeit-bootcamp.vercel.app',
      lastModified: new Date(),
    },
    {
      url: 'https://weekly-mission-git-jer1s-react-codeit-bootcamp.vercel.app/shared',
      lastModified: new Date(),
    },
  ]
}
