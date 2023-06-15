export const metadata = {
  title: 'Linkbrary',
  description: '세상의 모든 정보를 한 곳에',
  charSet: 'UTF-8',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Linkbrary',
    description: '세상의 모든 정보를 쉽게 저장하고 관리해 보세요',
    url: 'https://weekly-mission-git-jer1s-react-codeit-bootcamp.vercel.app/og-thumb.png',
    siteName: 'Linkbrary',
    images: [
      {
        url: '/opengraph-image.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'ko-kr',
    type: 'website',
  },
  links: [
    {
      rel: 'stylesheet',
      type: 'text/css',
      href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css',
    },
    {
      rel: 'stylesheet',
      href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
    },
    {
      rel: 'icon',
      type: 'icon',
      href: '/favicon.ico',
    },
  ],
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
