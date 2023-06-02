import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Preload woff2 fonts */}
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff2"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.woff2"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
