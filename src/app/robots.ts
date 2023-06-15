import { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://weekly-mission-git-jer1s-react-codeit-bootcamp.vercel.app/sitemap.xml',
  }
}

export default robots
