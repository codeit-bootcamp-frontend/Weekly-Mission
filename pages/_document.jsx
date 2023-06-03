import {
  Html, Head, Main, NextScript,
} from 'next/document';

const Document = () => {
  return (
    <Html lang="ko">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요"
        />
        <meta property="og:title" content="Linkbrary" />
        <meta
          property="og:url"
          content="https://weekly-mission-git-jer1s-react-codeit-bootcamp.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          // content="https://weekly-mission-git-jer1s-react-codeit-bootcamp.vercel.app/og-thumb.png"
        />
        <meta
          property="og:description"
          content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          // content="https://weekly-mission-git-jer1s-react-codeit-bootcamp.vercel.app/og-thumb.png"
        />
        <meta name="twitter:title" content="Linkbrary" />
        <meta
          name="twitter:description"
          content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요"
        />
        <link rel="icon" type="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
