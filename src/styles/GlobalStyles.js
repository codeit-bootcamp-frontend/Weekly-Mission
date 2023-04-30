import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pretendard";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }

  html {
    font-family: "Pretendard";
    font-size: 62.5%;
    --linkbrary-primary: #6d6afe;
    --linkbrary-red: #ff5b56;
    --linkbrary-black: #111322;
    --linkbrary-white: #ffffff;
    --library-dark-slate-gray: #3e3e43;
    --library-blue-gray: #9fa6b2;
    --library-light-blue-gray: #ccd5e3;
    --library-alice-blue: #e7effb;
    --library-white-smoke: #f0f6ff;
  }
  
  body {
    font-size: 1.6rem;
    margin:0;
  }
  
  * {
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
    text-align: center;
  }
`;

export default GlobalStyle;
